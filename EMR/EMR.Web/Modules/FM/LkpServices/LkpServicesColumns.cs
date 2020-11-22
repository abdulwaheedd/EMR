
namespace EMR.FM.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("FM.LkpServices")]
    [BasedOnRow(typeof(Entities.LkpServicesRow), CheckNames = true)]
    public class LkpServicesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,SortOrder(1,descending:false)]
        public Int32 ServiceId { get; set; }
        [Width(200)]
        public String ServiceTypeServiceTypeDari { get; set; }
        [Width(200)]
        [EditLink]
        public String ServiceDari { get; set; }
        [Width(200)]
        public String ServicePashto { get; set; }
        [Width(200)]
        public String ServiceEn { get; set; }
        [Width(200)]
        public Double ServicePrice { get; set; }
        [Width(200)]
        public Boolean Status { get; set; }
    }
}