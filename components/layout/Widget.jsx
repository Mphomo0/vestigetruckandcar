'use client'

import WhatsAppWidget from 'react-whatsapp-chat-widget'
import 'react-whatsapp-chat-widget/index.css'

export default function Widget() {
  return (
    <WhatsAppWidget
      phoneNo='27636995438'
      position='right'
      widgetWidth='300px'
      widgetWidthMobile='260px'
      autoOpen={false}
      autoOpenTimer={5000}
      messageBox={true}
      messageBoxTxt='Hi Team, is there any related service available ?'
      iconSize='60'
      iconColor='white'
      iconBgColor='green'
      headerIcon='https://www.pdapps.net.in/_next/static/media/android-chrome-192x192.9a39c2c7.png'
      headerIconColor='pink'
      headerTxtColor='black'
      headerBgColor='tomato'
      headerTitle='Kevin'
      headerCaption='Online'
      bodyBgColor='#bbb'
      chatPersonName='Kevin'
      chatMessage={
        <>
          Hi there 👋 <br />
          <br /> How can I help you?
        </>
      }
      footerBgColor='#999'
      placeholder='Type a message..'
      btnBgColor='red'
      btnTxt='Start Chat'
      btnTxtColor='white'
    />
  )
}
