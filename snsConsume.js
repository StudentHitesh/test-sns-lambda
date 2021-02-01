module.exports.handler = async (event, context) => {

    console.log(`event: ${JSON.stringify(event)} context: ${context}`);
    let message = event.Records[0].Sns.Message;

    console.log("Received MESSAGE: " + message);

    return message;
};