import type { ActionFunctionArgs } from "react-router";

export async function action({ request }: ActionFunctionArgs) {
    const data = await request.json();
    // console.log("Received data:", data);
    // สร้างข้อความส่ง LINE
    const message = data

    // console.log("Sending LINE message:", message);


    return await sendLineMessage(message);

}

type ReservationData = {
  name: string;
  phone: string;
  date: string;
  time: string;
  branch: string;
  guests: string | number;
};

// async function sendLineMessage(data: ReservationData) {
//   const CHANNEL_ACCESS_TOKEN = process.env.CHANNEL_ACCESS_TOKEN!;
//   const USER_ID = "Cd303bc180366567a708e26ec9102cea6"; //production group id
// //   const USER_ID = "C316e6877a8c0cc5b8bad9662a1db3260"; // test group

//   const flexMessage = {
//     type: "flex",
//     altText: "New reservation",
//     contents: {
//       type: "bubble",
//       hero: {
//         type: "image",
//         url: "https://www.homsleepsalon.com/logo.png",
//         size: "full",
//         aspectMode: "cover",
//       },
//       body: {
//         type: "box",
//         layout: "vertical",
//         contents: [
//           {
//             type: "text",
//             text: "New reservation",
//             weight: "bold",
//             size: "lg",
//           },
//           {
//             type: "text",
//             text: `Name : ${data.name}`,
//             color: "#3F2723ff",
//           },
//           {
//             type: "text",
//             text: `Phone : ${data.phone}`,
//             color: "#3F2723ff",
//           },
//           {
//             type: "text",
//             text: `Branch : ${data.branch}`,
//             color: "#3F2723ff",
//           },
//           {
//             type: "text",
//             text: `Guest : ${data.guests}`,
//             color: "#3F2723ff",
//           },
//           {
//             type: "text",
//             text: `Date : ${data.date}`,
//             color: "#3F2723ff",
//           },
//           {
//             type: "text",
//             text: `Time : ${data.time}`,
//             color: "#3F2723ff",
//           },
//         ],
//       },
//       footer: {
//         type: "box",
//         layout: "vertical",
//         contents: [
//           {
//             type: "button",
//             style: "primary",
//             action: {
//               type: "uri",
//               label: "Call",
//               uri: `tel:${data.phone}`,
//             },
//           },
//         ],
//       },
//     },
//   };

//   const result = await fetch("https://api.line.me/v2/bot/message/push", {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       to: USER_ID,
//       messages: [flexMessage],
//     }),
//   });

// //   console.log("LINE message sent, response status:", result);
//   return result;
// }



async function sendLineMessage(message: string) {
    const CHANNEL_ACCESS_TOKEN = process.env.CHANNEL_ACCESS_TOKEN!;
    const USER_ID = "Cd303bc180366567a708e26ec9102cea6"

    const result = await fetch("https://api.line.me/v2/bot/message/push", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${CHANNEL_ACCESS_TOKEN}`,
            "Content-Type": "application/json",

        },
        body: JSON.stringify({
            to: USER_ID,
            messages: [
                {
                    type: "text",
                    text: message,
                },
            ],
        }),
    });

    return result
}
