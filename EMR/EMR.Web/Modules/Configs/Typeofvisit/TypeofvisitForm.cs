
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.Typeofvisit")]
    [BasedOnRow(typeof(Entities.TypeofvisitRow), CheckNames = true)]
    public class TypeofvisitForm
    {
        public String TypeOfVisit { get; set; }
    }
}