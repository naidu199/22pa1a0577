# 22pa1a0577


#Testing

Invoke-WebRequest -Uri "http://localhost:5000/api/shorturls" -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"url": "https://www.google.com", "shortcode": "google1"}'



StatusCode        : 201
StatusDescription : Created
Content           : {"shortLink":"http://localhost:5000/api/google1","
                    expiry":"2025-07-30T07:28:12.025Z"}
RawContent        : HTTP/1.1 201 Created
                    Access-Control-Allow-Origin: *
                    Connection: keep-alive
                    Keep-Alive: timeout=5
                    Content-Length: 85
                    Content-Type: application/json; charset=utf-8
                    Date: Wed, 30 Jul 2025 06:58:12 ...
Forms             : {}
Headers           : {[Access-Control-Allow-Origin, *], [Connection,
                    keep-alive], [Keep-Alive, timeout=5],
                    [Content-Length, 85]...}                           Images            : {}                                                 InputFields       : {}                                                 Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 85



PS D:\Affordmed\22pa1a0577> Invoke-WebRequest -Uri "http://localhost:5000/api/shorturls" -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"url": "https://www.github.com", "validity": 60, "shortcode": "gh60"}'


StatusCode        : 201
StatusDescription : Created
Content           : {"shortLink":"http://localhost:5000/api/gh60","exp
                    iry":"2025-07-30T07:58:59.778Z"}
RawContent        : HTTP/1.1 201 Created
                    Access-Control-Allow-Origin: *
                    Connection: keep-alive
                    Keep-Alive: timeout=5
                    Content-Length: 82
                    Content-Type: application/json; charset=utf-8
                    Date: Wed, 30 Jul 2025 06:58:59 ...
Forms             : {}
Headers           : {[Access-Control-Allow-Origin, *], [Connection,
                    keep-alive], [Keep-Alive, timeout=5],
                    [Content-Length, 82]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 82



PS D:\Affordmed\22pa1a0577> Invoke-WebRequest -Uri "http://localhost:5000/api/shorturls" -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"url": "invalid-url", "shortcode": "invalid"}'
Invoke-WebRequest : {"message":"Invalid URL format"}
At line:1 char:1
+ Invoke-WebRequest -Uri "http://localhost:5000/api/shorturls"
-Method  ...
+
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (System.Net.HttpWebRe
   quest:HttpWebRequest) [Invoke-WebRequest], WebException
    + FullyQualifiedErrorId : WebCmdletWebResponseException,Microsoft
   .PowerShell.Commands.InvokeWebRequestCommand
PS D:\Affordmed\22pa1a0577>
