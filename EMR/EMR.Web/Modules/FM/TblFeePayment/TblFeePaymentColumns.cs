
namespace EMR.FM.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("FM.TblFeePayment")]
    [BasedOnRow(typeof(Entities.TblFeePaymentRow), CheckNames = true)]
    public class TblFeePaymentColumns
    {
        [UrlFormatter(DisplayFormat ="Edit",UrlFormat = "~/FM/ServiceFee/Edit?id={0}"), DisplayName("Db.Shared.RecordId"), AlignCenter]
        public Int64 FeeId { get; set; }
        [Width(100)]
        public Int64 Mrid { get; set; }
        [Width(250)]
        public String ServiceTypeServiceType { get; set; }
        [Width(200)]
        public Int32 ServiceFee { get; set; }
        [Width(200)]
        public DateTime DateCreated { get; set; }
        [Width(200)]
        public Int32 Times { get; set; }
    }
}