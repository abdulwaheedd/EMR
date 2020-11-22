using Microsoft.Win32;
using Serenity.Data;
using System;
using System.IO;
using System.Net;

namespace EMR.Modules.Common.Dashboard
{
    //[ReadPermission(EMR.Dashboard.PermissionKeys.Dashboard.View)]
    public class DashboardWindowsServiceInfo
    {
        private readonly string _environmentFolder = AppDomain.CurrentDomain.BaseDirectory;
        string version = System.Reflection.Assembly.GetExecutingAssembly().GetName().Version.ToString();
        public string ServiceUrl;
        public string ErrorMessage;
        public DashboardWindowsServiceInfo()
        {
            #region Pick Windows Dashboard Service Url
            ServiceUrl = GetWindowsServiceUrl();
            #endregion
            #region Pick IISExpress or IIS  Dashboard Service Url if Windows Dashboard Service is not running
            if (ValidateDashboardService(ServiceUrl))
            {
                DashboardServiceSerialization serializer = new DashboardServiceSerialization();
                DashboardServicePreviewSettings settings = new DashboardServicePreviewSettings();
                string dashboardServiceSettingPath = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData) + @"\Syncfusion\Dashboard Platform SDK\" + version + @"\DashboardServiceSetting.xml";
                if (File.Exists(dashboardServiceSettingPath))
                {
                    settings = serializer.Deserialize(dashboardServiceSettingPath);
                    if (!ValidateDashboardService(settings.ServiceURL))
                        ServiceUrl = settings.ServiceURL;
                    else
                    {
                        ServiceUrl = string.Empty;
                        ErrorMessage = "Dashboard Service is not running. Run DashboardServiceInstaller.exe file to start Dashboard Service in IIS Express";
                    }
                }
                else
                {
                    ErrorMessage = "Dashboard Service is not running. Run DashboardServiceInstaller.exe file to start Dashboard Service in IIS Express";
                    ServiceUrl = string.Empty;
                }
            }
            #endregion
        }

        /// <summary>
        /// Used to pick the Windows Dashboard Service URL 
        /// </summary>
        /// <returns>ServiceURL of Windows Dashboard Service</returns>
        private string GetWindowsServiceUrl()
        {
            string url = string.Empty;
            try
            {
                RegistryKey key = Registry.LocalMachine.OpenSubKey(@"Software\SyncfusionDashboard\Syncfusion Dashboard Service");
                if (key == null)
                    key = Registry.LocalMachine.OpenSubKey(@"Software\Wow6432Node\SyncfusionDashboard\Syncfusion Dashboard Service");
                if (key != null)
                {
                    url = (string)key.GetValue("ServiceURL");
                    key.Close();
                }
            }
            catch (Exception)
            {

            }
            return url;
        }

        /// <summary>
        /// Validate whether Dashboard Service is running in the Url
        /// </summary>
        /// <param name="dashboardServiceUrl">Dashboard Service Url</param>
        /// <returns>returns whether valid dashboard service</returns>
        private static bool ValidateDashboardService(string dashboardServiceUrl)
        {
            bool errorOccurred = false;
            try
            {
                if (string.IsNullOrWhiteSpace(dashboardServiceUrl))
                {
                    return true;
                }
                if (!dashboardServiceUrl.Contains("http://") && !dashboardServiceUrl.Contains("https://"))
                    dashboardServiceUrl = "http://" + dashboardServiceUrl + @"/IsServiceExists";
                else
                    dashboardServiceUrl = dashboardServiceUrl + @"/IsServiceExists";
                WebRequest request = WebRequest.Create(new Uri(dashboardServiceUrl, UriKind.Absolute));
                request.Method = "GET";
                using (WebResponse response = request.GetResponse())
                {
                    using (StreamReader reader = new StreamReader(response.GetResponseStream()))
                    {
                        string text = reader.ReadToEnd();
                        if (!text.Contains(System.Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes("DashboardServiceExists"))))
                        {
                            errorOccurred = true;
                        }
                    }
                }
                dashboardServiceUrl = dashboardServiceUrl.Replace(@"/IsServiceExists", "");

            }
            catch (Exception e)
            {
                dashboardServiceUrl = dashboardServiceUrl.Replace(@"/IsServiceExists", "");
                errorOccurred = true;
            }
            return errorOccurred;
        }
    }
}