export const referCreatorEmail = (name, link) =>
  `<!DOCTYPE html>
    <html
      style="
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        box-sizing: border-box;
        font-size: 14px;
        margin: 0;
      "
    >
      <head>
        <meta name="viewport" content="width=device-width" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Actionable emails e.g. reset password</title>
    
        <style type="text/css">
          img {
            max-width: 100%;
          }
          body {
            -webkit-font-smoothing: antialiased;
            -webkit-text-size-adjust: none;
            width: 100% !important;
            height: 100%;
            line-height: 1.6em;
          }
          body {
            background-color: #000017;
            color: #fcfcfc;
          }
          @media only screen and (max-width: 640px) {
            body {
              padding: 0 !important;
            }
            h1 {
              font-weight: 800 !important;
              margin: 20px 0 5px !important;
            }
            h2 {
              font-weight: 800 !important;
              margin: 20px 0 5px !important;
            }
            h3 {
              font-weight: 800 !important;
              margin: 20px 0 5px !important;
            }
            h4 {
              font-weight: 800 !important;
              margin: 20px 0 5px !important;
            }
            h1 {
              font-size: 22px !important;
            }
            h2 {
              font-size: 18px !important;
            }
            h3 {
              font-size: 16px !important;
            }
            .container {
              padding: 0 !important;
              width: 100% !important;
            }
            .content {
              padding: 0 !important;
            }
            .content-wrap {
              padding: 10px !important;
            }
            .invoice {
              width: 100% !important;
            }
          }
        </style>
      </head>
    
      <body
        itemscope
        itemtype="http://schema.org/EmailMessage"
        style="
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          box-sizing: border-box;
          font-size: 14px;
          -webkit-font-smoothing: antialiased;
          -webkit-text-size-adjust: none;
          width: 100% !important;
          height: 100%;
          line-height: 1.6em;
          background-color: #000017;
          margin: 0;
        "
        bgcolor="#000017"
      >
        <table
          class="body-wrap"
          style="
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            box-sizing: border-box;
            font-size: 14px;
            width: 100%;
            background-color: #000017;
            margin: 0;
            color: #fcfcfc;
          "
          bgcolor="#000017"
        >
          <tr
            style="
              font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
              box-sizing: border-box;
              font-size: 14px;
              margin: 0;
            "
          >
            <td
              style="
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                box-sizing: border-box;
                font-size: 14px;
                vertical-align: top;
                margin: 0;
              "
              valign="top"
            ></td>
            <td
              class="container"
              width="600"
              style="
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                box-sizing: border-box;
                font-size: 14px;
                vertical-align: top;
                display: block !important;
                max-width: 600px !important;
                clear: both !important;
                margin: 0 auto;
              "
              valign="top"
            >
              <div
                class="content"
                style="
                  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                  box-sizing: border-box;
                  font-size: 14px;
                  max-width: 600px;
                  display: block;
                  margin: 0 auto;
                  padding: 20px;
                "
              >
                <table
                  class="main"
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  itemprop="action"
                  itemscope
                  itemtype="http://schema.org/ConfirmAction"
                  style="
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    box-sizing: border-box;
                    font-size: 14px;
                    border-radius: 3px;
                    background-color: #000017;
                    margin: 0;
                    border: 1px solid #e9e9e9;
                  "
                  bgcolor="#fff"
                >
                  <tr
                    style="
                      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                      box-sizing: border-box;
                      font-size: 14px;
                      margin: 0;
                    "
                  >
                    <td
                      class="content-wrap"
                      style="
                        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                        box-sizing: border-box;
                        font-size: 14px;
                        vertical-align: top;
                        margin: 0;
                        padding: 20px;
                      "
                      valign="top"
                    >
                      <meta
                        itemprop="name"
                        content="Confirm Email"
                        style="
                          font-family: 'Helvetica Neue', Helvetica, Arial,
                            sans-serif;
                          box-sizing: border-box;
                          font-size: 14px;
                          margin: 0;
                        "
                      />
                      <table
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        style="
                          font-family: 'Helvetica Neue', Helvetica, Arial,
                            sans-serif;
                          box-sizing: border-box;
                          font-size: 14px;
                          margin: 0;
                        "
                      >
                        <tr
                          style="
                            font-family: 'Helvetica Neue', Helvetica, Arial,
                              sans-serif;
                            box-sizing: border-box;
                            font-size: 14px;
                            margin: 0;
                          "
                        >
                          <td
                            class="content-block"
                            style="
                              font-family: 'Helvetica Neue', Helvetica, Arial,
                                sans-serif;
                              box-sizing: border-box;
                              font-size: 14px;
                              vertical-align: top;
                              margin: 0;
                              padding: 0 0 20px;
                            "
                            valign="top"
                          >
                           You have been invited to join Aview
                          </td>
                        </tr>
                        <tr
                          style="
                            font-family: 'Helvetica Neue', Helvetica, Arial,
                              sans-serif;
                            box-sizing: border-box;
                            font-size: 14px;
                            margin: 0;
                          "
                        >
                          <td
                            class="content-block"
                            style="
                              font-family: 'Helvetica Neue', Helvetica, Arial,
                                sans-serif;
                              box-sizing: border-box;
                              font-size: 14px;
                              vertical-align: top;
                              margin: 0;
                              padding: 0 0 20px;
                            "
                            valign="top"
                          >
                            We may need to send you critical information about our
                            service and it is important that we have an accurate
                            email address.
                          </td>
                        </tr>
                        <tr
                          style="
                            font-family: 'Helvetica Neue', Helvetica, Arial,
                              sans-serif;
                            box-sizing: border-box;
                            font-size: 14px;
                            margin: 0;
                          "
                        >
                          <td
                            class="content-block"
                            itemprop="handler"
                            itemscope
                            itemtype="http://schema.org/HttpActionHandler"
                            style="
                              font-family: 'Helvetica Neue', Helvetica, Arial,
                                sans-serif;
                              box-sizing: border-box;
                              font-size: 14px;
                              vertical-align: top;
                              margin: 0;
                              padding: 0 0 20px;
                            "
                            valign="top"
                          >
                            <a
                              href="http://www.aviewint.com"
                              class="btn-primary"
                              itemprop="url"
                              style="
                                font-family: 'Helvetica Neue', Helvetica, Arial,
                                  sans-serif;
                                box-sizing: border-box;
                                font-size: 14px;
                                color: #fff;
                                text-decoration: none;
                                line-height: 2em;
                                font-weight: bold;
                                text-align: center;
                                cursor: pointer;
                                display: inline-block;
                                border-radius: 5px;
                                text-transform: capitalize;
                                background-color: #348eda;
                                margin: 0;
                                border-color: #348eda;
                                border-style: solid;
                                border-width: 10px 20px;
                              "
                              >Confirm email address</a
                            >
                          </td>
                        </tr>
                        <tr
                          style="
                            font-family: 'Helvetica Neue', Helvetica, Arial,
                              sans-serif;
                            box-sizing: border-box;
                            font-size: 14px;
                            margin: 0;
                          "
                        >
                          <td
                            class="content-block"
                            style="
                              font-family: 'Helvetica Neue', Helvetica, Arial,
                                sans-serif;
                              box-sizing: border-box;
                              font-size: 14px;
                              vertical-align: top;
                              margin: 0;
                              padding: 0 0 20px;
                            "
                            valign="top"
                          >
                            &mdash; The Mailgunners
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <div
                  class="footer"
                  style="
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    box-sizing: border-box;
                    font-size: 14px;
                    width: 100%;
                    clear: both;
                    color: #999;
                    margin: 0;
                    padding: 20px;
                  "
                >
                  <table
                    width="100%"
                    style="
                      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                      box-sizing: border-box;
                      font-size: 14px;
                      margin: 0;
                    "
                  >
                    <tr
                      style="
                        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                        box-sizing: border-box;
                        font-size: 14px;
                        margin: 0;
                      "
                    >
                      <td
                        class="aligncenter content-block"
                        style="
                          font-family: 'Helvetica Neue', Helvetica, Arial,
                            sans-serif;
                          box-sizing: border-box;
                          font-size: 12px;
                          vertical-align: top;
                          color: #999;
                          text-align: center;
                          margin: 0;
                          padding: 0 0 20px;
                        "
                        align="center"
                        valign="top"
                      >
                        Follow
                        <a
                          href="http://twitter.com/mail_gun"
                          style="
                            font-family: 'Helvetica Neue', Helvetica, Arial,
                              sans-serif;
                            box-sizing: border-box;
                            font-size: 12px;
                            color: #999;
                            text-decoration: underline;
                            margin: 0;
                          "
                          >@Mail_Gun</a
                        >
                        on Twitter.
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </td>
            <td
              style="
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                box-sizing: border-box;
                font-size: 14px;
                vertical-align: top;
                margin: 0;
              "
              valign="top"
            ></td>
          </tr>
        </table>
      </body>
    </html>
    `;

export const new_creator_welcome_mail = `<!DOCTYPE html>
<html
  style="
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    font-size: 14px;
    margin: 0;
  "
>
  <head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Welcome to Aview International</title>
    <style type="text/css">
      img {
        max-width: 100%;
        display: inline;
      }
      body {
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: none;
        width: 100% !important;
        height: 100%;
        line-height: 1.6em;
      }
      body {
        background-color: #f6f6f6;
      }
      h1 {
        font-size: 32px !important;
        line-height: 40px;
      }
      @media only screen and (max-width: 640px) {
        body {
          padding: 0 !important;
        }
        h1 {
          font-weight: 800 !important;
          margin: 20px 0 5px !important;
          font-size: 22px !important;
          line-height: 28px;
        }
        h2 {
          font-weight: 800 !important;
          margin: 20px 0 5px !important;
          font-size: 18px !important;
        }
        h3 {
          font-weight: 800 !important;
          margin: 20px 0 5px !important;
          font-size: 16px !important;
        }
      }
    </style>
  </head>

  <body
    itemscope
    itemtype="http://schema.org/EmailMessage"
    style="
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      box-sizing: border-box;
      font-size: 14px;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: none;
      width: 100% !important;
      height: 100%;
      line-height: 1.6em;
      background-color: #f6f6f6;
      margin: 0;
    "
    bgcolor="#f6f6f6"
  >
    <div
      class="content"
      style="
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        box-sizing: border-box;
        font-size: 14px;
        max-width: 600px;
        display: block;
        margin: 0 auto;
        padding: 20px;
      "
    >
      <div
        style="
          background-image: url('https://res.cloudinary.com/drdedgqs6/image/upload/v1675359914/aview/aview-banner.jpg');
          background-repeat: no-repeat;
          background-size: 100%;
          background-position: center;
          height: 100px;
        "
      ></div>
      <h1>Thank you for interest in Aview International!</h1>
      <p>
        I am more than happy to discuss how we can help grow your international
        fanbase as we have for creators like Logan Paul, YesTheory, Mark Rober
        and many more!
      </p>
      <h3>Aview offers three primary services:</h3>
      <p><strong>1. Video/Subtitle Translation</strong></p>
      <p>
        Receive 100% accurate translation files within 24 hours, which can be
        easily added to content!
      </p>

      <p><strong>2. Audio Dubbing</strong></p>
      <p>
        Completed in 48 hours, receive your video with professional voiceovers
        in the translated content. This can be uploaded to a new
        &#8220;international channel&#8221; for an additional revenue stream. We
        will also edit the voiceovers directly onto the video so that no
        additional work will be needed on your end.
      </p>

      <p><strong>3. Subtitled Shorts </strong></p>
      <p>
        Edited and translated short-form content ready to be posted on any media
        platform (YouTube Shorts, Instagram Reels, TikTok). This is a unique way
        to go viral in many international markets.
      </p>

      <h3>Happy to chat more about what service is right for you.</h3>
      <p>Looking forward to working with you,</p>

      <p style="font-style: italic">Julia from Aview.</p>
    </div>
    <footer style="background-color: #000017; padding: 20px">
      <div style="text-align: center">
        <a
          href="https://www.youtube.com/@aviewinternational"
          target="_blank"
          rel="noreferrer"
          style="width: 20px; height: 20px; display: inline-block"
        >
          <img
            src="https://res.cloudinary.com/drdedgqs6/image/upload/v1675376541/aview/youtube-icon.png"
            alt="Aview Youtube"
          />
        </a>
        <a
          href="https://web.facebook.com/AviewInternational"
          target="_blank"
          rel="noreferrer"
          style="
            width: 20px;
            height: 20px;
            margin-left: 25px;
            margin-right: 25px;
            display: inline-block;
          "
        >
          <img
            src="https://res.cloudinary.com/drdedgqs6/image/upload/v1675376541/aview/facebook-icon.png"
            alt="Aview Facebook"
          />
        </a>
        <a
          href="https://www.instagram.com/aviewint/"
          target="_blank"
          rel="noreferrer"
          style="width: 20px; height: 20px; display: inline-block"
        >
          <img
            src="https://res.cloudinary.com/drdedgqs6/image/upload/v1675376541/aview/instagram-icon.png"
            alt="Aview Instagram"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/aview-international/"
          target="_blank"
          rel="noreferrer"
          style="
            width: 20px;
            height: 20px;
            margin-left: 25px;
            display: inline-block;
          "
        >
          <img
            src="https://res.cloudinary.com/drdedgqs6/image/upload/v1675376541/aview/linkedin-icon.png"
            alt="Aview LinkedIn"
          />
        </a>
      </div>
      <p style="text-align: center; color: #fcfcfc">
        &#169; Aview International, 2023
      </p>
    </footer>
  </body>
</html>
`;
