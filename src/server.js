import {
    asset_middlware,
    html_middleware,
  } from "oomph";
  
  
  Deno.serve((request) => {
       let { pathname } = new URL(request.url);
       
       window._app = `${Deno.cwd()}/src/_app`
       if(pathname.includes('.')){
        return asset_middlware(request);
       }else{
        return html_middleware(request);
       }
  });
  