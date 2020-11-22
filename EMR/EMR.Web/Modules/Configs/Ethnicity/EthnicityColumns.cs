
namespace EMR.Configs.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Configs.Ethnicity")]
    [BasedOnRow(typeof(Entities.EthnicityRow), CheckNames = true)]
    public class EthnicityColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EthnicityId { get; set; }
        [EditLink]
        public String EthnicityName { get; set; }
    }
}