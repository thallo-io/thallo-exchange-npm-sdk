FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-18

# Update all Ubuntu Packages (applies only when base image is Ubuntu)
RUN if [ "$(cat /etc/os-release | grep ^ID= | cut -d'=' -f2)" = "ubuntu" ]; then \
        apt-get update && apt-get upgrade -y; \
    fi

# Install all apt-get packages (applies only when base image is Ubuntu)
RUN if [ "$(cat /etc/os-release | grep ^ID= | cut -d'=' -f2)" = "ubuntu" ]; then \
        apt-get install -y curl python3-pip gnupg software-properties-common; \
    fi