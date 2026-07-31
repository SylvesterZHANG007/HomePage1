# Final Report

# **Design and Validation of a Wearable Ankle Rehabilitation Robot with an Anatomically Aligned 3\-RRR Spherical Parallel Mechanism**

Yufei Zhang  ·  Department of Mechanical Engineering, Columbia University in the City of New York

yz4917@columbia\.edu

Advisor: Prof\. Sunil K\. Agrawal 

Code: github\.com/YufeiZhang0601/wearable\-3rrr\-ankle\-rehab

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=YzhiN2RiNDBiNWM2MDIyNmM0OWIxOTJiMjdkYTQ2ODRfZDkzMzg5ZmNjNzBjOTI2MDQ5ZTc3ZWY4Yzc1NGFiMGRfSUQ6NzYzOTI4ODY2MjEzMTg1NDI4M18xNzgwOTExODM5OjE3ODA5OTgyMzlfVjM)

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=MjQ4NjAxYTgzMGM0MTQ5NTM0ZWU0ZWE2OGM4ODhiOTdfNzk5NWZjMWEwZDZjMTExZGYyMjc5YmM1NDhiNDYzOWNfSUQ6NzYzOTI4OTU2MzI3ODQ5NDkxOF8xNzgwOTExODM5OjE3ODA5OTgyMzlfVjM)

AMR research\-course project — a wearable ankle rehabilitation robot built on a 3\-RRR spherical parallel mechanism\. I have been working on this with Sylvester throughout this semester\. I will go through seven things:

- Mechanism design and the singularity story

- The foot\-plate — our shoe\-tray design

- Kinematics and the open\-source ROS 2 simulator

- The Assist\-As\-Needed control strategy

- How we plan to evaluate the system

- The hardware platform

- Where the project stands today

## **1\. Mechanism design and structural optimization**

Let me first talk about the mechanism design\.

Anatomically, the human ankle is not really one joint\. The talocrural and subtalar joints together produce three rotational degrees of freedom, and their three axes converge near a single anatomical point\. So we want a mechanism whose own center of rotation can be aligned with that point\. A 3\-RRR spherical parallel mechanism does exactly that:

- Nine revolute joints, all axes intersect at one common spherical center

- Three rotational DOFs about that center: dorsiflexion / plantarflexion, inversion / eversion, and yaw

- No parasitic translation — a clean match for the ankle's anatomical kinematics

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=MzM5NGE4ODJhMGYzOTM0ZWM0NjU0YmQ0NmZkZmYxYmZfZDJkOTBhN2YxNGNiODMxYmJiZjgxY2I3YTk3NDc0YjBfSUQ6NzYzOTAwMjAyMDAxNTU1NzU2M18xNzgwOTExODM5OjE3ODA5OTgyMzlfVjM)

The catch with any parallel mechanism is parallel singularities\. At a singular configuration, the platform can gain an uncontrolled degree of freedom even when all the actuators are locked — the device loses stiffness and can no longer resist external loads\. In rehabilitation, that is a real safety concern\.

Our approach evolved in two steps:

- Analyze the constraint Jacobian \(the A\-matrix\), identify singular configurations from rank degeneration, and limit each joint to a conservative range \(\~30° to 80°\) to avoid those regions\. This only "goes around" singularities, it doesn't solve them\.

- Inspired by Saheb \& Babu\(2021\), we treated the link\-length ratio and the platform radius as design variables and re\-optimized the geometry\. When the distal link L₂ is about 1\.15× the proximal link L₁, the singularity curves get pushed toward the workspace boundary\.

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=YjkwNTYzODBhZjBkZWFkMWViMzIwMjkwZTNkNWUxOGJfNmQxMmMwOWJiOTMzYjdkOWJmZTQ3Yjg4ZDE1ZjQzNzhfSUQ6NzYzOTAwMjAyMjM5MzYyOTY1Nl8xNzgwOTExODM5OjE3ODA5OTgyMzlfVjM)

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=MGMwN2Y4NGExMTYxZDhmZWRjYmIzYTdiYTVkYmQ3N2ZfY2JjMDVlOGJiYzgwYzFlYmJiZjc4NjViNWU0M2QxYjZfSUQ6NzYzOTAwMjAyMDg3NTQ1NTQ0NV8xNzgwOTExODM5OjE3ODA5OTgyMzlfVjM)

The numbers before and after the optimization:

|**Parameter**|**Before**|**After**|
|---|---|---|
|Distal / proximal link ratio L₂ / L₁|1\.00|1\.15|
|Global isotropy index \(relative\)|baseline|\+≈20%|
|Singularities in the interior workspace|present|pushed to boundary|
|Usable safe workspace|constrained by joint limits|meaningfully larger|

So instead of just avoiding singularities by joint limits, we are now reducing them at the structural level\.

Why this matters in practice is force\-transmission consistency\. At low isotropy, the mechanism has strong control authority in one direction and almost none in another, which translates directly into uneven motor loading and uneven rehabilitation feedback for the patient\. Pushing the singular curves outward means the device stays well\-conditioned across the whole usable workspace, not just at the center\.

## **2\. The foot\-plate — a shoe\-tray design**

In the literature, foot\-plates split into three patterns:

|**Approach**|**Stiffness**|**Foot\-size range**|**Comfort**|
|---|---|---|---|
|Rigid foot plate|high|single size|low — direct skin contact, hard surface|
|Soft sandal|drifts under load|flexible|medium|
|Shoe tray \(ours\)|high|EU 36–46 in the same hardware|high — patient wears their own shoes|

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=MTE2NjQxODJiMGU4NTEwYmU5OGE2ODhmZGU4NjgxYThfNjg5NTQ1ZGI4YzQwZTdhM2Q5NTVjOTQxMTA5NDgyMDBfSUQ6NzYzOTMwMDQ5MjM1ODc2NTUzN18xNzgwOTExODM5OjE3ODA5OTgyMzlfVjM)

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=Mzc0MmM3MmI3YzYyYjBmZmZhMzVmNzFlMDE0NTc0ZWRfY2RiODgyNTk1ZTIzZWJmZjgyMjQ2NDFmZDAxNzIzZjFfSUQ6NzYzOTMwMDE3MDczMjA4MDA2OF8xNzgwOTExODM5OjE3ODA5OTgyMzlfVjM)

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=MmZmYmMzZjE2MGRiODY2NGI1MTc1NDFjZTM1ODU2YjZfNGI0OWEwZTY0Yjg1NGYwOGZmYWE3NzBiMzU2ZjM5NzVfSUQ6NzYzOTMwMDM4NjMzNTIxNDgwNF8xNzgwOTExODM5OjE3ODA5OTgyMzlfVjM)

After surveying several comparable rehab devices, we converged on the shoe\-tray design\. The subject keeps their own shoes on, steps directly into the tray, and the bandage fixes the foot in place across the dorsum and around the heel\. Our wearable, strap\-mounted device then drives the tray as a rigid body\. This buys us two things at the same time:

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=YWRlMzk3MzNhOWVmODRmOGMwNDU4NjM3ZmE2MmU0NWZfNzJmZTgyNDJkMTdlNzc2MzVjN2VhNGVmZTAxZjc2YTFfSUQ6NzYzOTMwMDAyMjk5MTQ1NzIyOF8xNzgwOTExODM5OjE3ODA5OTgyMzlfVjM)

- Comfort — no direct skin contact, the patient walks on their own shoe sole, so long training sessions become tolerable\.

- Generalisation — one physical device fits users with different foot sizes, no re\-manufacturing per patient\.



![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=YjkyZGI2M2Q4M2I2NmQ3MDU1YTg1N2UxNTA4YmRmZmNfNjlmZTdlMjkyOTM1NjU1YjM4MmU3NDdkNjYxOTQyNGNfSUQ6NzYzOTAwMjAyMDE3NDg5MjAwOV8xNzgwOTExODM5OjE3ODA5OTgyMzlfVjM)

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=ZjdiMTZmMDQ3Y2UwMTA0NWExY2Y0ZmU2MDM1MzNiN2RfOWZkY2MyOTY5MTAxZWQzMDdkMTQwYTgyMThhMWFkODNfSUQ6NzYzOTI4OTE2NDM1NDEyODg1MF8xNzgwOTExODM5OjE3ODA5OTgyMzlfVjM)



## **3\. Kinematics and the open\-source simulator**

For the kinematics, we use two formulations side by side:

- Closed\-form inverse kinematics per leg — convenient for offline workspace evaluation and trajectory pre\-checking\.

- Numerical inverse kinematics — each leg reduces to one scalar residual, solved by bracket\-and\-bisection\. We pick the root closest to the previous control cycle so motor commands stay continuous\.

- Dependency\-free Python — the same solver runs in a ROS 2 node, a standalone CLI, and eventually the embedded loop on the Teensy\.

Everything is packaged into an open\-source ROS 2 ament\-python package, MIT licensed\. github\.com/YufeiZhang0601/wearable\-3rrr\-ankle\-rehab

The repository ships:

- URDF and Xacro robot description

- 22 STL meshes \(proximal links, distal links, platform, base, foot\-plate, shoe tray\)

- 4 launch files for RViz visualization

- A parallel\-IK pose demo node

- A Gazebo bring\-up for physics verification

- A closed\-loop tracking demo with logged CSV telemetry

To make sure the URDF behaves physically before we touch hardware, we load the model into Gazebo and use the Apply Force and Torque dialog to inject pure torques in the 1–10 N·m range at various points on each link\. We check for three things: no abnormal pose drift, no NaN inertias, and no mesh interpenetration\. That is our smoke test before any URDF change lands on main\.

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=MDNlOGI3M2E3OTBiODRkNWU3NDQ0NzU5NjZiZGJmNmVfZWVmY2I5NmMzY2M1YjBiZWNjM2VlMjdlYjAzZmQwZTNfSUQ6NzYzOTAwMjAyMDkyOTg5OTQ5MF8xNzgwOTExODM5OjE3ODA5OTgyMzlfVjM)

On top of the URDF, we also wrote a dependency\-free closed\-loop tracking demo that exercises the IK solver\. The trajectory parameters are:

|**Parameter**|**Value**|
|---|---|
|Pitch amplitude|±12°|
|Roll amplitude|±6°|
|Reference frequency|0\.05 Hz|
|Soft\-start ramp|3 s|
|Torque cap \(per joint\)|1\.2 N·m|
|Velocity cap \(per joint\)|0\.8 rad/s|

## **4\. Rehabilitation strategy — Assist\-As\-Needed**

Next, our rehabilitation strategy\. The system supports both passive rehabilitation \(the kind a CPM machine does\) and active rehabilitation\. For active mode we adopted the Assist\-As\-Needed strategy proposed by David Reinkensmeyer, which is designed to promote neuroplasticity\.

Unlike a fully passive controller, AAN only intervenes when the user actually needs help:

- If the user can follow the movement → the robot provides little or no assistance\.

- If the user starts to deviate → the robot gradually increases assistance\.

- If the user cannot complete the task → the robot provides sufficient support\.

The point is that we recognize the user's intent first, and then use impedance control to assist motion rather than override it\.

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=MGUxNWFhOTA0NjczODg0MWRhOGI5ZWFjNDM0NmFmZTdfYjY5NDVlNmM4ODViYjkxY2ExYTFiYWU1YzJhZmNiNGFfSUQ6NzYzOTAwMjAyMTAwOTYwNzY0MV8xNzgwOTExODM5OjE3ODA5OTgyMzlfVjM)

The clinical rationale for AAN is neuroplasticity\. If the robot always does the work, the patient learns to be passive\. If the robot never helps, the task is too hard and the patient fails\. AAN keeps the patient in the productive middle — just enough support to succeed, not so much that the brain stops trying\.

We estimate the user's torque without a distal force sensor, by reusing the motor current that the Dynamixel servos already report:

*τ\_user  ≈  k\_t · i\_motor  −  τ\_dyn\(q, q̇, q̈\)*



To be transparent: the AAN law is fully formulated and parameterized in the code, but it has not yet been deployed on real hardware\. I will come back to that at the end\.

## **5\. Experimental design**

We use five quantitative metrics to evaluate the system:

|**Metric**|**What it tells us**|**How we obtain it**|
|---|---|---|
|LSI — Limb Symmetry Index|Inter\-limb gait symmetry \(clinical north star\)|Stance / swing time ratio, affected vs\. sound side|
|Jerk|Motion smoothness|3rd time\-derivative of the foot\-plate IMU angle|
|Interaction torque|How well the robot agrees with the user|k\_t·i\_motor − τ\_dyn \(sensorless\)|
|CoP trajectory|Plantar load shifting|Gait mat|
|Human contribution ηₕ|Patient engagement under AAN|τ\_human / τ\_total per cycle|

For active rehabilitation, we designed three experiments\. Our initial test subjects are the three of us on the team, and since our ankles are healthy, we artificially create the impairment first\.

- The first is simulated impairment\. We tape a small sandbag to the toe, or apply a downward torque through the motor, to mimic foot\-drop\. After turning AAN on, we look at whether the LSI gait symmetry can recover from around 80% back toward 95%, and whether compensatory motions like hip\-hike are reduced\.

- The second is system transparency\. We switch the robot into a near\-zero\-impedance mode and let the subject walk while wearing the device, to see whether it interferes with natural gait\. If the IMU motion correlation R² stays above 0\.95 and the interaction torque stays close to zero, the system is essentially "transparent\."

- The third is active participation\. Under AAN mode, we observe whether the subject's active contribution ratio η\_h gradually rises while jerk stays smooth — meaning the subject is taking on more of the load without any degradation in motion quality\.

|**Experiment**|**Setup**|**Primary outcome**|**Success criterion**|
|---|---|---|---|
|E1 — Simulated impairment|Foot\-drop induced by toe Simulation with weight or motor torque, AAN on|LSI, hip\-hike amplitude|LSI ≈80% → ≈95%; hip\-hike reduced|
|E2 — System transparency|Zero\-impedance mode, barefoot vs\. worn|IMU R², interaction torque|R² \> 0\.95; \|τ\_int\| ≈ 0|
|E3 — Active participation|AAN sessions over time|ηₕ, jerk|ηₕ trends up; jerk stays smooth|

For passive rehabilitation, we focus on the short\-term transfer effect\. The subject:

- Walks normally as a baseline

- Trains on the robot for a short session \(e\.g\. enhanced dorsiflexion\)

- Walks again, and we check for increased step length and a forward shift of the Center of Pressure

If we see these short\-term changes after training, the system is actually influencing the user's neural control strategy — not just biomechanically pulling them around\.



And the order of E1–E3 matters\. We deliberately run E2 \(transparency\) before E3 \(AAN engagement\), because if the device is not transparent under zero impedance, any improvement we see under AAN could just be the device dragging the foot — not the patient learning\.

## **6\. Hardware platform**

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=YzIyNzU1NGVhMzczNjIxNjM4OThjYTQ0ZDc1NjlmYWRfZTQ2YjA1YTMwZTU2ZjQxODJkZTEzNWIyOGY0ZDExMjhfSUQ6NzYzOTI5NjgwNzc3NjA0NjI4NV8xNzgwOTExODM5OjE3ODA5OTgyMzlfVjM)

We settled on the following stack:

|**Component**|**Choice**|**Role**|
|---|---|---|
|Master controller|Teensy 4\.1 \+ RS\-485 transceiver|Deterministic 1 kHz control loop|
|Actuators|3 × Dynamixel XM430\-W350\-R|Daisy\-chained RS\-485 bus, current\-based torque|
|Orientation sensing|2 × IMU|One on the shank \(tibia\), one on the foot\-plate / dorsum|
|Joint angles|Servo encoders|Relative joint angle per leg|
|Ground truth gait|Lab gait mat|CoP trajectory, step length|

Our current 3D\-printed structure is still relatively rough; the next iteration adds a foam insole and soft padding around the strap interfaces to make extended training sessions a lot more comfortable\.

## **7\. Where the project stands today, and an open invitation**



### **Component\-level snapshot**

|**Component**|**Status**|**Note**|
|---|---|---|
|Mechanism design \+ kinematic optimization|Done|L₂ / L₁ = 1\.15, isotropy \+≈20%|
|Open\-source ROS 2 / Gazebo pipeline|Done|MIT license, dependency\-free Python|
|Inverse kinematics solver \(real\-time\)|Done|Closed\-form \+ numerical, branch\-continuous|
|Wearable hardware \+ shoe\-tray foot\-plate|Designed \& prototyped|3D\-printed, fits EU 36–46|
|AAN controller|Sim only|Formulated, not yet deployed on hardware|
|Experimental protocol \+ metrics|Designed|5 metrics, 3 active \+ 1 passive experiment|
|Untethered battery\-driven operation|Not yet|Power, BMS and wearable harness still open|
|Human\-subject experiments|Not yet|IRB / protocol execution pending|

### **In summary — what we delivered**

To bring it all together, we delivered four concrete things:

- An anatomically aligned spherical parallel mechanism\.

- A closed\-form plus numerical inverse kinematics solver, an open\-source ROS 2 / Gazebo pipeline that runs end\-to\-end in simulation\.

- An innovative wearable hardware design with the shoe\-tray foot\-plate — patient comfort and cross\-size generalization built in by construction\.

- A complete experimental protocol — five quantitative metrics, three active experiments, one passive transfer\-effect experiment, and a clear ablation structure\.

The robot is ready for the hardware\-closure step; that is the part we are handing forward\.

### **What is still open**

Two things are still open, and I want to be specific about them so the boundary is clear:

- Standalone operation — Find a suitable independent power supply 

- The human\-subject experiments themselves have not yet been run\.

The early experimental platform is built and runnable\. The open\-source codebase, the wearable hardware design, and the experimental protocol together provide a turn\-key starting point\. If a future student is interested in this direction, they can extend this work directly from where we leave it today\.



### 

That is the project\. Thank you very much for your attention, and I am happy to take questions\.



## **References**

**\[1\] **S\. Zhang, Y\. Zhang, J\. Lyu, and S\. K\. Agrawal, “From structural design to dynamics modeling: Control\-oriented development of a 3\-RRR parallel ankle rehabilitation robot,” arXiv preprint arXiv:2505\.13762, 2025\.

**\[2\] **C\. M\. Gosselin and J\. Angeles, “The optimum kinematic design of a spherical three\-degree\-of\-freedom parallel manipulator,” ASME J\. Mech\., Transm\., Autom\. Des\., vol\. 111, no\. 2, pp\. 202–207, 1989\.

**\[3\] **J\.\-P\. Merlet, “Jacobian, manipulability, condition number, and accuracy of parallel robots,” Int\. J\. Robot\. Res\., vol\. 25, no\. 6, pp\. 557–571, 2006\.

**\[4\] **H\. S\. Shaik and G\. S\. Babu, “Mathematical modeling and kinematic analysis of 3\-RRR planar parallel manipulator,” EAI Endorsed Transactions on Energy Web, vol\. 8, no\. 35, e9, 2021\.

**\[5\] **G\. Wu and S\. Bai, “Design and kinematic analysis of a 3\-RRR spherical parallel manipulator with reconfigurable four\-bar linkages,” Robot\. Comput\. Integr\. Manuf\., vol\. 56, pp\. 55–65, 2019\.

**\[6\] **P\. He et al\., “A novel 3\-RRR spherical parallel instrument for daily living emulation \(SPINDLE\) for functional rehabilitation of patients with stroke,” Int\. J\. Adv\. Robot\. Syst\., vol\. 18, no\. 3, 2021\.

**\[7\] **S\. Sadeqi, S\. P\. Bourgeois, E\. J\. Park, and S\. Arzanpour, “Design and performance analysis of a 3\-RRR spherical parallel manipulator for hip exoskeleton applications,” J\. Rehabil\. Assist\. Technol\. Eng\., vol\. 4, 2017\.

**\[8\] **A\. M\. Dollar and H\. Herr, “Lower extremity exoskeletons and active orthoses: Challenges and state\-of\-the\-art,” IEEE Trans\. Robot\., vol\. 24, no\. 1, pp\. 144–158, 2008\.

**\[9\] **P\. Sale, M\. Franceschini, A\. Waldner, S\. Hesse et al\., “Use of the robot assisted gait therapy in rehabilitation of patients with stroke and spinal cord injury,” Eur\. J\. Phys\. Rehabil\. Med\., vol\. 48, no\. 1, pp\. 111–121, 2012\.

**\[10\] **M\. Dong et al\., “State of the art in parallel ankle rehabilitation robot: A systematic review,” J\. NeuroEng\. Rehabil\., vol\. 18, no\. 1, 2021\.

**\[11\] **L\. L\. Cai et al\., “Implications of assist\-as\-needed robotic step training after a complete spinal cord injury on intrinsic strategies of motor learning,” J\. Neurosci\., vol\. 26, no\. 41, pp\. 10564–10568, 2006\.

**\[12\] **L\. Marchal\-Crespo and D\. J\. Reinkensmeyer, “Review of control strategies for robotic movement training after neurologic injury,” J\. NeuroEng\. Rehabil\., vol\. 6, no\. 20, 2009\.

**\[13\] **A\. Prado, K\. Kwei, N\. Vanegas\-Arroyave, and S\. K\. Agrawal, “Identification of freezing of gait in Parkinson’s patients using instrumented shoes and artificial neural networks,” in Proc\. IEEE RAS/EMBS Int\. Conf\. Biomed\. Robot\. Biomechatronics \(BioRob\), 2020, pp\. 68–73\.

**\[14\] **R\. Hidayah, L\. Bishop, X\. Jin, S\. Chamarthy, J\. Stein, and S\. K\. Agrawal, “Gait adaptation using a cable\-driven active leg exoskeleton \(C\-ALEX\) with post\-stroke participants,” IEEE Trans\. Neural Syst\. Rehabil\. Eng\., vol\. 28, no\. 9, pp\. 1984–1993, Sept\. 2020\.

**\[15\] **A\. J\. Paydarfar, A\. Prado, and S\. K\. Agrawal, “Human activity recognition using recurrent neural network classifiers on raw signals from insole piezoresistors,” in Proc\. IEEE RAS/EMBS Int\. Conf\. Biomed\. Robot\. Biomechatronics \(BioRob\), 2020, pp\. 916–921\.

**\[16\] **M\. Tomc, M\. Zadravec, A\. Olenšek, and Z\. Matjačić, “Actuator\- and control\-less ankle exoskeleton for push\-off assistance during treadmill walking: A proof\-of\-concept study,” in Proc\. Int\. Conf\. Rehabil\. Robot\. \(ICORR\), 2025, pp\. 681–686\.

**\[17\] **R\. L\. Hybart and D\. P\. Ferris, “Preliminary validation of proportional myoelectric control of a commercially available robotic ankle exoskeleton,” in Proc\. Int\. Conf\. Rehabil\. Robot\. \(ICORR\), 2022, pp\. 1–5\.

**\[18\] **S\. Galle, P\. Malcolm, W\. Derave, and D\. De Clercq, “Adaptation to walking with an exoskeleton that assists ankle extension,” Gait \& Posture, vol\. 38, no\. 3, pp\. 495–499, 2013\.

**\[19\] **R\. W\. Jackson and S\. H\. Collins, “Heuristic\-based ankle exoskeleton control for co\-adaptive assistance of human locomotion,” IEEE Trans\. Neural Syst\. Rehabil\. Eng\., vol\. 27, no\. 10, pp\. 2059–2069, Oct\. 2019\.

**\[20\] **J\. Zhang, C\. C\. Cheah, and S\. H\. Collins, “Experimental comparison of torque control methods on an ankle exoskeleton during human walking,” in Proc\. IEEE Int\. Conf\. Robot\. Autom\. \(ICRA\), 2015, pp\. 5584–5589\.

**\[21\] **K\. E\. Gordon and D\. P\. Ferris, “Learning to walk with a robotic ankle exoskeleton,” J\. Biomech\., vol\. 40, no\. 12, pp\. 2636–2644, 2007\.

**\[22\] **X\. Pan, J\. Mi, T\. Yu, S\. Chu, and P\. Zhu, “Design of ankle exoskeleton based on closed\-loop Bowden cable,” in Proc\. IEEE Int\. Conf\. Electr\., Autom\. Comput\. Eng\. \(ICEACE\), 2025, pp\. 244–248\.

**\[23\] **G\. Orekhov, Y\. Fang, C\. F\. Cuddeback et al\., “Usability and performance validation of an ultra\-lightweight and versatile untethered robotic ankle exoskeleton,” J\. NeuroEng\. Rehabil\., vol\. 18, art\. 163, 2021\.

**\[24\] **Y\. Fang and Z\. F\. Lerner, “How ankle exoskeleton assistance affects the mechanics of incline walking and stair ascent in cerebral palsy,” in Proc\. Int\. Conf\. Rehabil\. Robot\. \(ICORR\), 2022, pp\. 1–6\.

**\[25\] **M\. Tomc and Z\. Matjačić, “Harnessing energy of a treadmill for push\-off assistance during walking: In\-silico feasibility study,” Front\. Bioeng\. Biotechnol\., vol\. 10, art\. 832087, 2022\.

**\[26\] **U\. Pérez\-Flores, A\. D\. Palomino\-Merino, J\. R\. López\-Gutiérrez, and S\. Vergara\-Limon, “Modeling and control of ankle exoskeleton,” in Proc\. Int\. Conf\. Electr\. Eng\., Comput\. Sci\. Autom\. Control \(CCE\), 2024, pp\. 1–6\.

**\[27\] **M\. Camardo et al\., “Design evaluation of a passive ankle exoskeleton for gait training,” in Proc\. Int\. Conf\. Rehabil\. Robot\. \(ICORR\), 2025, pp\. 1444–1448\.

**\[28\] **M\. B\. Yandell, J\. R\. Tacca, and K\. E\. Zelik, “Design of a low profile, unpowered ankle exoskeleton that fits under clothes: Overcoming practical barriers to widespread societal adoption,” IEEE Trans\. Neural Syst\. Rehabil\. Eng\., vol\. 27, no\. 4, pp\. 712–723, Apr\. 2019\.

**\[29\] **Y\. Peng, J\. Chen, L\. Wang, J\. Han, and J\. Zhang, “Design and evaluation of a bidirectional ankle exoskeleton system,” in Proc\. Youth Acad\. Annu\. Conf\. CAA \(YAC\), 2023, pp\. 481–485\.

**\[30\] **J\. Zhang, W\. Dong, C\. Xiong, and Q\. Zhang, “Mechanical design and experimental validation of a variable stiffness ankle exoskeleton,” in Proc\. Int\. Conf\. Adv\. Robot\. Mechatronics \(ICARM\), 2022, pp\. 459–464\.

**\[31\] **C\. Yue, X\. Lin, X\. Zhang, J\. Qiu, and H\. Cheng, “Design and performance evaluation of a wearable sensing system for lower\-limb exoskeleton,” Appl\. Bionics Biomech\., vol\. 2018, art\. 8610458, 2018\.

**\[32\] **ROBOTIS, “Dynamixel XM430\-W350\-R e\-manual,” accessed May 2026\. https://emanual\.robotis\.com/docs/en/dxl/x/xm430\-w350/

