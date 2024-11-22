# Docs AI
A web and Chrome Extension Plugin App that allows users to easily analyze Text and PDF Legal Contracts Documents Leveraging Sambanova AI

# How to  Run the Application from Web(Thats with any Web Browser)

Navigate to the frontend code  **docs_ai_frontend/** folder. Open **index_web.html** file  and the application will be running.



# How to Install and Run the Application as Chrome Extension Extension Plugin

 Open chrome browser. Click **Chrome Extension Icon** ===> goto **Manage Extension.**  (For some chrome browser you need to click or enable **"Developer Mode"** at top right) then

--Click on **Load Unpacked** --> Select **docs_ai_frontend** folder.
 Ensure that it gets loaded. 

To Test the app. Click **Chrome Extension Icon** once again and You will see the app titled: **"Docs AI"** Click on it to Start running the Application.



Note the Application **PHP Backend folder(docs_ai_backend_php)** is hosted on my site **jelisoft.com** and everything is working fine.



However, If you want to host the application backend on your own PHP Server eg. Yourphp_server.com,
First Ensure that php backend url is properly entered or set at **docs_ai_frontend/script/app_backend_url.js** files to point to your own backend Server Codes/Files.

If you want to run the php backend code locally, Ensure you have **xammpp Server** install, start the xammpp control Panel and start the Apache Server.
You can upload the code to htdocs folder eg. **/xammpp/htdocs/docs_ai_backend_php**


# Other Tools used:

1.) Open Sourced Html Text Editor Markdown used: https://github.com/markedjs/marked
2.) PDF.JS for PDF Text Extraction:  https://github.com/mozilla/pdf.js
