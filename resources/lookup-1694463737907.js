(function(window, undefined) {
  var dictionary = {
    "a4dcf4cc-56e2-41a6-aa71-56f09ca51b81": "Edit Profile Screen",
    "d0a366e5-7e7b-4945-b506-ea07c990b316": "Create Account Screen",
    "30b21c7c-c398-444a-a03b-f28ea67c114a": "Home Screen",
    "86d6a004-3ca7-416b-bdbb-556bf0aa9a22": "Report Screen",
    "1bb11027-9d95-429d-af77-f8b96f5ee325": "Traffic Incident 1",
    "7a4d126a-e76b-4724-87ef-f4f960a3dbea": "User Report",
    "047c8bb4-4371-464e-a5b2-b86df09e0eb1": "Traffic Incident 2",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Sign In Screen",
    "5d78c256-b01b-4b9b-8f67-fe34fa6d35c1": "Report Sucess",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);