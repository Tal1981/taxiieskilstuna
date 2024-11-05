import nodemailer from "nodemailer";

const generateRandomNumber = () => {

    const rand_num = Math.floor( Math.random() * 100000000000 );

    return String( rand_num ).padStart( 11, '0' );

}

export default async function API(req, res) {

    if (req.method !== 'POST') {
        return res.status(405).json({ message: "Method not allowed" });
    }
    
    const { firstName, lastName, source, destination, phone, email, date, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER_AUTH,
            pass: process.env.EMAIL_PASS_AUTH,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${firstName} ${lastName}" <${email}>`,
            to: "taxiieskilstuna@gmail.com",
            subject: `En ny bookning: [${generateRandomNumber()}-${date}]`,
            html: `<b>((Ny bookning))</b>
             <p>................................</p>
             <h1>Kunduppgifter</h1>
                <table style="border:2px double #999">
                    <thead>
                        <tr>
                            <th  style="background:orange; padding: 4px"></th>
                            <th  style="background:orange; padding: 4px"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td  style="background:orange; padding: 4px">För_Namn</td>
                            <td  style="background:white; padding: 4px">${firstName}</td>
                        </tr>
                        <tr>
                            <td  style="background:orange; padding: 4px">Efter_Namn</td>
                            <td  style="background:white; padding: 4px">${lastName}</td>
                        </tr>
                        <tr>
                            <td  style="background:orange; padding: 4px">Från</td>
                            <td  style="background:white; padding: 4px">${source}</td>
                        </tr>
                        <tr>
                            <td  style="background:orange; padding: 4px">Till</td>
                            <td  style="background:white; padding: 4px">${destination}</td>
                        </tr>
                        <tr>
                            <td  style="background:orange; padding: 4px">Telefon</td>
                            <td  style="background:white; padding: 4px">${phone}</td>
                        </tr>
                                    <tr>
                            <td  style="background:orange; padding: 4px">E-mail</td>
                            <td  style="background:white; padding: 4px">${email}</td>
                        </tr>
                                    <tr>
                            <td  style="background:orange; padding: 4px">Datum & Tid</td>
                            <td  style="background:white; padding: 4px">${date}</td>
                        </tr>
                    </tbody>
                </table>
                <br>
                <table style="border:2px double black; boxShadow:2px 2px 2px 2px #eee;">
                    <thead>
                        <tr style="background:orange; padding: 4px">
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="background:white; padding: 4px; text-wrap: wrap">
                            <td>${message}</td>
                        </tr>
                    </tbody>
                </table>`,
        });

        res.status(200).json({ message: "Your message was sent :)" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Could not send the message. Your message was not sent!" });
    }
}