---
slug: aws-lambda
title: Upload Python Script to AWS Lambda
authors:
  name: Pilar Rius
  title: Data Scientist @ EuFMD
  url: https://github.com/PilarRius
  image_url: https://github.com/PilarRius.png
tags: [aws, automate, lambda, python script]
---

# Step-by-Step Tutorial: Uploading a Python Script to AWS Lambda and Scheduling with EventBridge

## Prerequisites
- AWS account (request credentials to team lead)
- Python script ready for deployment
- AWS CLI installed and configured (optional but recommended)

## Step 1: Create an AWS Lambda Function

1. **Navigate to AWS Lambda**:
   - Go to the AWS Management Console and open the Lambda service.

          ![lambda console](/img/lambda1.jpg)

2. **Create a Function**:
   - Click on **Create function**.
          ![lambda function](/img/lambda2.jpg)
   - Choose **Author from scratch**.
   - **Function name**: Enter a name for your function (e.g., `MoodleDataProcessor`).
   - **Runtime**: Select Python (e.g., Python 3.8).
          ![lambda function2](/img/lambda3.jpg)
 
   - **Permissions**: Choose an existing role or create a new role with basic Lambda permissions.
          ![lambda function3](/img/lambda4.jpg)
   - Click **Create function**.

3. **Upload Your Script**:
   - In the function's configuration page, scroll down to the **Function code** section.
   - Under **Code source**, click **Upload from** and select **.zip file**.
   - Upload a .zip file containing your Python script and any dependencies.
   **Dependencies**:
   - If your script has dependencies, include them in a `requirements.txt` file and package them with your script. Dependencies are packages used on your script. Check what imports you have and add those package names into a txt file:
   
           ![dependencies](/img/dependencies.jpg)

   - add the `requirements.txt` to the folder where the python script is and zip it. Then you can upload the zip file: 

          ![lambda function4](/img/lambda5.jpg)

## Step 2: Set Up Environment Variables (Optional)

1. **Environment Variables**:
   - Select configuration on the tabs and  go to  **Environment variables** section.
   - Click **Edit** and add any necessary environment variables (e.g., API keys, database credentials).

## Step 3: Configure the Lambda Function

1. **Handler**:
   - Ensure the handler is set correctly (e.g., `lambda_function.lambda_handler` if your main function is `lambda_handler` in `lambda_function.py`).


## Step 4: Create an EventBridge Rule

1. **Navigate to EventBridge**:
   - Go to the AWS Management Console and open the EventBridge service.

     ![eventbridge](/img/eventbridge.jpg)

2. **Create a Rule**:
   - Scroll down and Click on **Create rule**.
     ![eventbridge2](/img/eventbridge2.jpg)

   - **Name**: Enter a name for your rule (e.g., `RunMoodleScriptEveryMonday`).
   - **Event Source**: Choose **EventBridge (CloudWatch Events)**.
   - **Schedule**: Select **Schedule** and use a cron expression to run the script every Monday. For example, `cron(0 0 ? * MON *)` runs the script at midnight UTC every Monday.
   - **Target**: Click **Add target** and select **Lambda function**.
   - **Function**: Choose your Lambda function (`MoodleDataProcessor`).
   - Click **Create**.

## Step 5: Test and Monitor

1. **Test the Lambda Function**:
   - In the Lambda function's configuration page, click **Test**.
   - Create a new test event and click **Test** to ensure your script runs correctly.

2. **Monitor Logs**:
   - Use Amazon CloudWatch Logs to monitor the execution of your Lambda function and troubleshoot any issues.

## Example Cron Expression

- `cron(0 0 ? * MON *)`: This expression schedules the Lambda function to run at 00:00 UTC every Monday.

## Additional Tips

- **IAM Roles and Permissions**: Ensure your Lambda function has the necessary permissions to access the Moodle API and the RDS instance.
- **Error Handling**: Implement error handling in your script to manage potential issues during execution.
- **Notifications**: Consider setting up SNS (Simple Notification Service) to receive notifications if the Lambda function fails.

By following these steps, you can automate the execution of your Python script on AWS, ensuring it runs every Monday without manual intervention.


