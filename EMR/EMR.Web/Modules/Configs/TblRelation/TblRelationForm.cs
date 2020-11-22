
namespace EMR.Configs.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Configs.TblRelation")]
    [BasedOnRow(typeof(Entities.TblRelationRow), CheckNames = true)]
    public class TblRelationForm
    {
        public String RelationNameEng { get; set; }
        public String RelationName { get; set; }

    }
}