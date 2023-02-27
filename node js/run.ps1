# Define the repository URL and file path
$repoUrl = "https://github.com/Karanxidhu/screenshots.git"
$filePath = "node js/screenshot.js"

# Clone the repository to a temporary directory
$tempDir = New-Item -ItemType Directory -Path $env:TEMP\GitDownload -Force
git clone $repoUrl $tempDir.FullName

# Navigate to the repository directory and checkout the default branch
cd $tempDir.FullName
# git checkout master

# Copy the file to the current directory
# Copy-Item $filePath .

# Clean up the temporary directory
# Remove-Item $tempDir.FullName -Recurse -Force
 
cd '.\node js'

node .\screenshot.js