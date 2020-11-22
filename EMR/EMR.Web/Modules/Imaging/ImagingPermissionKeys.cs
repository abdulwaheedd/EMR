using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace EMR.Imaging
{
    public class PermissionKeys
    {
        [DisplayName("ImagePatients")]
        public class ImagePatients
        {
            public const string Insert = "Imaging:ImagePatients:Insert";
            public const string Update = "Imaging:ImagePatients:Update";
            public const string Delete = "Imaging:ImagePatients:Delete";
            public const string View = "Imaging:ImagePatients:View";
        }

        [DisplayName("Image visits")]
        public class Imagevisits
        {
            public const string Insert = "Imaging:Imagevisits:Insert";
            public const string Update = "Imaging:Imagevisits:Update";
            public const string Delete = "Imaging:Imagevisits:Delete";
            public const string View = "Imaging:Imagevisits:View";
        }

        [DisplayName("Imagings")]
        public class ImgImagings
        {
            public const string Insert = "Imaging:ImgImagings:Insert";
            public const string Update = "Imaging:ImgImagings:Update";
            public const string Delete = "Imaging:ImgImagings:Delete";
            public const string View = "Imaging:ImgImagings:View";
        }

        [Description("[General]")]
        public const string General = "Imaging:General";
    }
}