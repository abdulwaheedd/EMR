
namespace EMR.FM.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("FM"), TableName("[dbo].[TblFeePayment]")]
    [DisplayName("User Fee Payment Screen"), InstanceName("User Fee Payment")]
    [ReadPermission(PermissionKeys.TblFeePayment.View)]
    [ModifyPermission(PermissionKeys.TblFeePayment.Update)]
    [InsertPermission(PermissionKeys.TblFeePayment.Insert)]
    [DeletePermission(PermissionKeys.TblFeePayment.Delete)]
    public sealed class TblFeePaymentRow : Row, IIdRow
    {
        [DisplayName("Fee Id"), Identity]
        public Int64? FeeId
        {
            get { return Fields.FeeId[this]; }
            set { Fields.FeeId[this] = value; }
        }

        [DisplayName("MRID"),Column("MRID"), NotNull]
        public Int64? Mrid
        {
            get { return Fields.Mrid[this]; }
            set { Fields.Mrid[this] = value; }
        }

        [DisplayName("Service"), NotNull, ForeignKey("[dbo].[LkpServices]", "ServiceId"), LeftJoin("jService")]
        public Int32? ServiceId
        {
            get { return Fields.ServiceId[this]; }
            set { Fields.ServiceId[this] = value; }
        }

        [DisplayName("Service Fee")]
        public Int32? ServiceFee
        {
            get { return Fields.ServiceFee[this]; }
            set { Fields.ServiceFee[this] = value; }
        }

        [DisplayName("Date Created")]
        public DateTime? DateCreated
        {
            get { return Fields.DateCreated[this]; }
            set { Fields.DateCreated[this] = value; }
        }

        [DisplayName("Service Type"), Expression("jService.[ServiceDari] + ' - '+jService.[ServicePashto]+ ' - '+jService.[ServiceEn]")]
        public String ServiceTypeServiceType
        {
            get { return Fields.ServiceTypeServiceType[this]; }
            set { Fields.ServiceTypeServiceType[this] = value; }
        }

        [DisplayName("User Name")]
        public String UserName
        {
            get { return Fields.UserName[this]; }
            set { Fields.UserName[this] = value; }
        }

        [DisplayName("Last Updated")]
        public DateTime? LastUpdated
        {
            get { return Fields.LastUpdated[this]; }
            set { Fields.LastUpdated[this] = value; }
        }

        [DisplayName("Times")]
        public Int32? Times
        {
            get { return Fields.Times[this]; }
            set { Fields.Times[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.FeeId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblFeePaymentRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field FeeId;
            public Int64Field Mrid;
            public Int32Field ServiceId;
            public Int32Field ServiceFee;
            public DateTimeField DateCreated;
            public StringField UserName;
            public DateTimeField LastUpdated;
            public Int32Field Times;
            public StringField ServiceTypeServiceType;
        }
    }
}
