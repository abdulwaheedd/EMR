
namespace EMR.FM.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("FM.TblFeePayment")]
    [BasedOnRow(typeof(Entities.TblFeePaymentRow), CheckNames = true)]
    public class TblFeePaymentForm
    {
        public Int64 Mrid { get; set; }
        public Int32 ServiceId { get; set; }
        public Int32 ServiceFee { get; set; }
        public DateTime DateCreated { get; set; }
        public Int32 Times { get; set; }
    }
}