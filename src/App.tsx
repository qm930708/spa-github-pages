import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DarkModeButton } from './ui/DarkModeButton';
import { GitHubIconLink } from './ui/GitHubIconLink';
import { globalCss, styled } from './stitches.config';
import { Home } from './components/Home';
import { ExampleComponent } from './components/ExampleComponent';
// import { ExampleTwoDeepComponent } from './components/ExampleTwoDeepComponent';
import { SitemapLinkGenerator } from './components/SitemapLinkGenerator';
import { PageNotFound } from './components/PageNotFound';
import { Breadcrumbs } from './components/Breadcrumbs';

const AppContainer = styled('div', {
  maxWidth: '540px',
  padding: '12px 15px 25px',
  margin: '0 auto',
});

const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '18px',
});

const H1 = styled('h1', {
  fontSize: '26px',
  marginRight: '16px',
});

const HeaderIconContainer = styled('span', {
  width: '78px',
  display: 'inline-flex',
  justifyContent: 'space-between',
  gap: '12px',
});

const BreadcrumbsNav = styled('nav', {
  margin: '18px 0',
});


function ADFS_Metadata() {
  var data = {"issuer":"https:\/\/tec-w-1007986.gd.com\/adfs","authorization_endpoint":"https:\/\/adfssrv.gd.com\/adfs\/oauth2\/authorize\/","token_endpoint":"https:\/\/adfssrv.gd.com\/adfs\/oauth2\/token\/","jwks_uri":"https:\/\/qm930708.github.io\/spa-github-pages\/keys","token_endpoint_auth_methods_supported":["client_secret_post","client_secret_basic","private_key_jwt","windows_client_authentication"],"response_types_supported":["code","id_token","code id_token","id_token token","code token","code id_token token"],"response_modes_supported":["query","fragment","form_post"],"grant_types_supported":["authorization_code","refresh_token","client_credentials","urn:ietf:params:oauth:grant-type:jwt-bearer","implicit","password","srv_challenge","urn:ietf:params:oauth:grant-type:device_code","device_code"],"subject_types_supported":["pairwise"],"scopes_supported":["vpn_cert","openid","session:role-any","session:scope-any","email","logon_cert","user_impersonation","allatclaims","profile","winhello_cert","aza"],"id_token_signing_alg_values_supported":["RS256"],"token_endpoint_auth_signing_alg_values_supported":["RS256"],"access_token_issuer":"https:\/\/adfssrv.gd.com\/adfs\/services\/trust","claims_supported":["aud","iss","iat","exp","auth_time","nonce","at_hash","c_hash","sub","upn","unique_name","pwd_url","pwd_exp","mfa_auth_time","sid","nbf"],"microsoft_multi_refresh_token":true,"userinfo_endpoint":"https:\/\/adfssrv.gd.com\/adfs\/userinfo","capabilities":[],"end_session_endpoint":"https:\/\/adfssrv.gd.com\/adfs\/oauth2\/logout","as_access_token_token_binding_supported":true,"as_refresh_token_token_binding_supported":true,"resource_access_token_token_binding_supported":true,"op_id_token_token_binding_supported":true,"rp_id_token_token_binding_supported":true,"frontchannel_logout_supported":true,"frontchannel_logout_session_supported":true,"device_authorization_endpoint":"https:\/\/adfssrv.gd.com\/adfs\/oauth2\/devicecode"};
  return <div><pre>{JSON.stringify(data, null, 2) }</pre></div>;
}

function ADFS_JWKS() {
  var data = {"keys":[{"kty":"RSA","use":"sig","alg":"RS256","kid":"CRmvYrDKiSK5lqfwFydCqEK9_Io","x5t":"CRmvYrDKiSK5lqfwFydCqEK9_Io","n":"15W8yxOZqyk7OIzv5PPRJryzk1AAZsoRBVLYejW97nCBJltMYEjqmA-nicOxTuIZd7Uax-n44Zb7reySoAgwHcToLuIxzz7Nx9KUKLRpxGUJ8QjdRu6OdW8PRyifyEMOUk0u5AO-_ITooXYh2CSFeItTDfA2UuoF2rfqlujLf4NSOIRyDQ5VzK9XuIepuqXOW9TQP5jl8vcyWXXtZwmq4WMzgwVaRr8k1rg6hAbF1aZaYuQmgUBWjZkA0_iGUFM8shvA339E-ugiHe1PJyX_1lbPjrdi7qPf-iIJ6B4lD8UUhfkjdEoGjwVD5N1s_i5Nd1v0d1QuTQxyGeD3sJ3QOQ","e":"AQAB","x5c":["MIIEAzCCAuugAwIBAgIUCjIbi9vU3wRWQLQUW8Gu4nEHuJowDQYJKoZIhvcNAQELBQAwgZAxCzAJBgNVBAYTAkNOMQswCQYDVQQIDAJaSjELMAkGA1UEBwwCSFoxDTALBgNVBAoMBE1TVFIxCzAJBgNVBAsMAkdEMRcwFQYDVQQDDA5hZGZzc3J2LmdkLmNvbTEyMDAGCSqGSIb3DQEJARYjcmVsYXRpb25hbGdhdGV3YXlAbWljcm9zdHJhdGVneS5jb20wHhcNMjIwNDI1MDg1NzU2WhcNMzIwNDIyMDg1NzU2WjCBkDELMAkGA1UEBhMCQ04xCzAJBgNVBAgMAlpKMQswCQYDVQQHDAJIWjENMAsGA1UECgwETVNUUjELMAkGA1UECwwCR0QxFzAVBgNVBAMMDmFkZnNzcnYuZ2QuY29tMTIwMAYJKoZIhvcNAQkBFiNyZWxhdGlvbmFsZ2F0ZXdheUBtaWNyb3N0cmF0ZWd5LmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANeVvMsTmaspOziM7+Tz0Sa8s5NQAGbKEQVS2Ho1ve5wgSZbTGBI6pgPp4nDsU7iGXe1Gsfp+OGW+63skqAIMB3E6C7iMc8+zcfSlCi0acRlCfEI3UbujnVvD0con8hDDlJNLuQDvvyE6KF2IdgkhXiLUw3wNlLqBdq36pboy3+DUjiEcg0OVcyvV7iHqbqlzlvU0D+Y5fL3Mll17WcJquFjM4MFWka\/JNa4OoQGxdWmWmLkJoFAVo2ZANP4hlBTPLIbwN9\/RProIh3tTycl\/9ZWz463Yu6j3\/oiCegeJQ\/FFIX5I3RKBo8FQ+TdbP4uTXdb9HdULk0Mchng97Cd0DkCAwEAAaNTMFEwHQYDVR0OBBYEFLa4rsvw4CVKK77B2w6LDKeA1C+sMB8GA1UdIwQYMBaAFLa4rsvw4CVKK77B2w6LDKeA1C+sMA8GA1UdEwEB\/wQFMAMBAf8wDQYJKoZIhvcNAQELBQADggEBAFFAZo\/poRAIKh8rWLWIC6KdN62uJdMhhq7mYNlu0cdQ0F7qB0GpJlNuuNSYHAkHUMC4jWGohsZlgbOn6Uyz+bkM31jkyWTWgcaoU477gYyIdSMW5RM8QFT7zxoBZboRPp\/bp5eG5AXSVvSUlprgZjEA5D3Lp9aifodx8X1AXkFksdzgcgruVS1kAZGbvTZR\/KVrPNincgJMvjVJ\/fZGjvhgkOwOyTYpNmDahCL7RlnufcF1keQKzyGy6ymPc2po0Ms6L0iUFmMBZ1IkITReApp\/Hlb29kP4yR\/Xw3t0AWCcLaxhxkYvjPOy83rL6PlU8RBaE2OAI0i7oVihqua59hI="]},{"kty":"RSA","use":"sig","alg":"RS256","kid":"32-HOEU6Y1AtSocu0WGfXss7atQ","x5t":"32-HOEU6Y1AtSocu0WGfXss7atQ","n":"riRNsada_KBtPipeWNRg1UQo3jK7Z8JgHLdWNi2Ae0M7JL2p7HtgX2AyI16VseP2MsTBxehxCElNN4ncGcgebxruuYRWEw4uNcutkwPB5yNRbXsvalPJsGZJOjnaWOFe8S1gyDEh6WclmywW9ZZuVZdN0Vzb_RGCmQcIT6Z0O-z13u3gaFt0pVsG3jI_ba2YJsjbY9I_GYlLWN9FeK1j0N4ZaNNdQZC7yHxDWa9YLW55EOau5RnrT3KZXIYtTROqjcIZYdHnx6gyKsalN_SPn-JAqma9tmqfsgX3Az9-gYEU0FIbiaOm_mjwFxyKUcDaRPsK7nf0Lr9hx29DWWuySQ","e":"AQAB","x5c":["MIIEDzCCAvegAwIBAgIUY1GsTKqRWpw+2Xy0NDfOsj7eaokwDQYJKoZIhvcNAQELBQAwgZYxCzAJBgNVBAYTAkNOMQswCQYDVQQIDAJaSjELMAkGA1UEBwwCSFoxDTALBgNVBAoMBE1TVFIxCzAJBgNVBAsMAkdEMR0wGwYDVQQDDBR0ZWMtdy0xMDA3OTg2LmdkLmNvbTEyMDAGCSqGSIb3DQEJARYjcmVsYXRpb25hbGdhdGV3YXlAbWljcm9zdHJhdGVneS5jb20wHhcNMjIwNDI0MDMwMjQyWhcNMzIwNDIxMDMwMjQyWjCBljELMAkGA1UEBhMCQ04xCzAJBgNVBAgMAlpKMQswCQYDVQQHDAJIWjENMAsGA1UECgwETVNUUjELMAkGA1UECwwCR0QxHTAbBgNVBAMMFHRlYy13LTEwMDc5ODYuZ2QuY29tMTIwMAYJKoZIhvcNAQkBFiNyZWxhdGlvbmFsZ2F0ZXdheUBtaWNyb3N0cmF0ZWd5LmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAK4kTbGnWvygbT4qXljUYNVEKN4yu2fCYBy3VjYtgHtDOyS9qex7YF9gMiNelbHj9jLEwcXocQhJTTeJ3BnIHm8a7rmEVhMOLjXLrZMDwecjUW17L2pTybBmSTo52ljhXvEtYMgxIelnJZssFvWWblWXTdFc2\/0RgpkHCE+mdDvs9d7t4GhbdKVbBt4yP22tmCbI22PSPxmJS1jfRXitY9DeGWjTXUGQu8h8Q1mvWC1ueRDmruUZ609ymVyGLU0Tqo3CGWHR58eoMirGpTf0j5\/iQKpmvbZqn7IF9wM\/foGBFNBSG4mjpv5o8BccilHA2kT7Cu539C6\/YcdvQ1lrskkCAwEAAaNTMFEwHQYDVR0OBBYEFAsugDHxL+gbEoGxAs22lxDqy67QMB8GA1UdIwQYMBaAFAsugDHxL+gbEoGxAs22lxDqy67QMA8GA1UdEwEB\/wQFMAMBAf8wDQYJKoZIhvcNAQELBQADggEBAANzqoy5H16nUa47DBAfX8fQEnANmwWOCGcEvKw+vjtSUabRPDZaOKmE\/ybfbls\/fGMZ48m5tJ0cZ\/66Mp9Of3wgmTvGmvltYIH\/TE+MEYV8vt1KRywM2SbDtmYUpGA+coU2JNy6oS+d85sD3h2+BjPfG7pouT8NMQV+pxlsnvxxzHwPF6PVhvlIW1WL4U\/9Zy9WHVn9WIlAg87Lhk2zWb\/R\/0zXMS8wyV6JBpBMo4IHibDy8aHfy1zdSIJwrG\/zQe7y\/0n6Zg6EyOxoILB7md6kTFCnp7y7SHAYf7cx6gT\/f4p2Nj9N97ZQJsYsF57i+stw7uZFZjkABr4MOuJ8oWw="]}]};
  return <div><pre>{JSON.stringify(data, null, 2) }</pre></div>;
}

export const App: React.VFC = () => {
  globalCss();

  return (
      

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/a" component={Home} />
        <Route
          exact
          path="/.well-known/openid-configuration"
          component={ADFS_Metadata}
        />
        <Route
          exact
          path="/keys"
          component={ADFS_JWKS}
        />
      </Switch>
  );
};

