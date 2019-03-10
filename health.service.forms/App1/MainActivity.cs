using System;
using Android.App;
using Android.OS;
using Android.Runtime;
using Android.Support.Design.Widget;
using Android.Support.V7.App;
using Android.Views;
using Android.Webkit;
using Android.Widget;

namespace App1
{
    [Activity(Label = "@string/app_name", Theme = "@style/AppTheme.NoActionBar", MainLauncher = true)]
    public class MainActivity : AppCompatActivity
    {
        private WebView webView;

        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);
            SetContentView(Resource.Layout.content_main);

            webView = FindViewById<WebView>(Resource.Id.LocalWebView);
            webView.Settings.LoadWithOverviewMode = true;


            webView.Settings.JavaScriptEnabled = true;
            webView.Settings.DomStorageEnabled = true;
            webView.Settings.UseWideViewPort = true;
            webView.Settings.AllowContentAccess = true;
            webView.Settings.AllowFileAccess = true;
            webView.Settings.AllowFileAccessFromFileURLs = true;
            webView.Settings.AllowUniversalAccessFromFileURLs = true;


            var clientHybrid = new HybridWebViewClient();
            //webView.SetWebViewClient(clientHybrid);

            webView.LoadUrl("file:///android_asset/index.html");
            //const string html = @"<html><head><script type='text/javascript'>window.location.replace('file:///android_asset/index.html')</script></head><body></body></html>";
            //webView.LoadDataWithBaseURL("file:///android_asset/", html, "text/html", "UTF-8", null);
        }


        protected override void OnDestroy()
        {
            webView.Destroy();
            base.OnDestroy();
        }

        private class HybridWebViewClient : WebViewClient
        {
            public override WebResourceResponse ShouldInterceptRequest(WebView view, IWebResourceRequest request)
            {
                //var url = request.Url.ToString();

                //var http = new HttpClient();

                //return new WebResourceResponse()
                return base.ShouldInterceptRequest(view, request);
            }

            //public override bool ShouldOverrideUrlLoading(WebView view, string url)
            //{
            //    return false;
            //    //const string scheme = "hybrid:";

            //    //if (!url.StartsWith(scheme))
            //    //    return false;

            //    //return true;
            //}

        }
    }
}

