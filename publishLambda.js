const AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {
    console.log(`AWS lambda and SNS trigger !`);
    console.log(`event: ${JSON.stringify(event)}`);

    const params = {
        Message: event.body,
        Subject: 'Test',
        TopicArn: process.env.SNS_LAMBDA_EVENTS_TOPIC
    };
    const publishTextPromise = sns.publish(params).promise();
    publishTextPromise.then(
        function (data) {
            console.log(data);
        }).catch(
            function (err) {
                console.error(err, err.stack);
            });
};
