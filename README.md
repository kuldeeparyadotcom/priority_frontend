Set up Instructions

Step 1: Clone
git clone https://github.com/kuldeeparyadotcom/priority_frontend.git

Step 2: Update host name and port
priority_frontend hostname and port must be changed in order to
vi app/task.service.ts
taskURL
tasksURL

Step 3: Build Image
priority_frontend/priorityapp/buildImage.sh

Step 4: Run Container
priority_frontend/priorityapp/spinupContainer.sh
