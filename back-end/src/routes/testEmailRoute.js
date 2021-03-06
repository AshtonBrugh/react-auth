import { sendEmail } from "../util/sendEmail";

export const testEmailRoute = {
    path: '/api/test-email',
    method: 'post',
    handler: async (req, res) => {
        try {
            await sendEmail({
                to: 'meadows.ashton93@gmail.com',
                from: 'meadows.ashton93@gmail.com',
                subject: 'Does this work?',
                text: 'If your reading this.. then yes it works!',
            });
            res.sendStatus(200);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
}