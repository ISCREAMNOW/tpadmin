define("library/clickmap",[],function(a,b,c){_gaMark=RM_ACTION,$(function(){_gaq&&_gaq.push&&$("form").submit(function(){"signup"==RM_ACTION?_gaMark+="_phone":"pre_login"==RM_ACTION&&("login-user-form"==$(this).attr("id")?_gaMark="login_prelogin":_gaMark="signup_prelogin"),_gaq.push(["_trackEvent",_gaMark,"click"]);try{switch(RM_ACTION){case"login":clickMap("www",!0).accountLogin(1,$("#username").val());break;case"pre_login":"login-user-form"==$(this).attr("id")?clickMap("www",!0).accountLogin(31,$("input[name='email']").val()):clickMap("www",!0).accountSignup(32,$(this).attr("id"));break;case"signup":clickMap("www",!0).accountSignup(2,"phone")}}catch(a){}})})});