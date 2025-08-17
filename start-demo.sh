#!/bin/bash

echo "=== Research Website Demo ==="
echo "Starting local server for research websites..."
echo ""
echo "Main Homepage: http://localhost:8081"
echo ""
echo "Research Project Pages:"
echo "1. Self-Reproducing Robot: http://localhost:8081/research-websites/self-reproducing-robot.html"
echo "2. Multimodal Gripper: http://localhost:8081/research-websites/multimodal-gripper.html"
echo "3. Smart Materials: http://localhost:8081/research-websites/smart-materials.html"
echo "4. Elephant Trunk: http://localhost:8081/research-websites/elephant-trunk.html"
echo "5. Rehabilitation Robot: http://localhost:8081/research-websites/rehabilitation-robot.html"
echo ""
echo "Test Pages:"
echo "- University Logos Test: http://localhost:8081/test-logos.html"
echo ""
echo "Note: Server is running on port 8081 to avoid conflicts"
echo "Press Ctrl+C to stop"
echo ""

# Start a simple HTTP server if Python is available
if command -v python3 &> /dev/null; then
    echo "Starting Python HTTP server..."
    python3 -m http.server 8081
elif command -v python &> /dev/null; then
    echo "Starting Python HTTP server..."
    python -m http.server 8081
else
    echo "Python not found. Please start a local server manually."
    echo "Example: python -m http.server 8081"
fi 