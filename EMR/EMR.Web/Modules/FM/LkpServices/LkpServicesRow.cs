
namespace EMR.FM.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("FM"), TableName("[dbo].[LkpServices]")]
    [DisplayName("Services"), InstanceName("Service")]
    [ReadPermission(PermissionKeys.LkpServices.View)]
    [ModifyPermission(PermissionKeys.LkpServices.Update)]
    [InsertPermission(PermissionKeys.LkpServices.Insert)]
    [DeletePermission(PermissionKeys.LkpServices.Delete)]
    [LookupScript("FM.LkpServices")]
    public sealed class LkpServicesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Service Id"), PrimaryKey]
        public Int32? ServiceId
        {
            get { return Fields.ServiceId[this]; }
            set { Fields.ServiceId[this] = value; }
        }

        [DisplayName("Service Type"),NotNull, ForeignKey("[dbo].[LkpServiceTypes]", "ServiceTypeId"), LeftJoin("jServiceType"), TextualField("ServiceTypeServiceTypeDari")]
        public Int32? ServiceTypeId
        {
            get { return Fields.ServiceTypeId[this]; }
            set { Fields.ServiceTypeId[this] = value; }
        }

        [DisplayName("Service Dari"),NotNull, Size(100), QuickSearch]
        public String ServiceDari
        {
            get { return Fields.ServiceDari[this]; }
            set { Fields.ServiceDari[this] = value; }
        }

        [DisplayName("Service Pashto"), Size(100)]
        public String ServicePashto
        {
            get { return Fields.ServicePashto[this]; }
            set { Fields.ServicePashto[this] = value; }
        }

        [DisplayName("Service En"),NotNull, Size(100)]
        public String ServiceEn
        {
            get { return Fields.ServiceEn[this]; }
            set { Fields.ServiceEn[this] = value; }
        }

        [DisplayName("Service Price"),NotNull]
        public Double? ServicePrice
        {
            get { return Fields.ServicePrice[this]; }
            set { Fields.ServicePrice[this] = value; }
        }

        [DisplayName("Discount Rate"),DefaultValue(0)]
        public Double? DiscountRate
        {
            get { return Fields.DiscountRate[this]; }
            set { Fields.DiscountRate[this] = value; }
        }

        [DisplayName("Status")]
        public Boolean? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Service Type Dari"), Expression("jServiceType.[ServiceTypeDari]")]
        public String ServiceTypeServiceTypeDari
        {
            get { return Fields.ServiceTypeServiceTypeDari[this]; }
            set { Fields.ServiceTypeServiceTypeDari[this] = value; }
        }

        [DisplayName("Service Type Pashto"), Expression("jServiceType.[ServiceTypePashto]")]
        public String ServiceTypeServiceTypePashto
        {
            get { return Fields.ServiceTypeServiceTypePashto[this]; }
            set { Fields.ServiceTypeServiceTypePashto[this] = value; }
        }

        [DisplayName("Service Type"), Expression("jServiceType.[ServiceTypeEn]")]
        public String ServiceTypeServiceTypeEn
        {
            get { return Fields.ServiceTypeServiceTypeEn[this]; }
            set { Fields.ServiceTypeServiceTypeEn[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ServiceId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ServiceDari; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LkpServicesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ServiceId;
            public Int32Field ServiceTypeId;
            public StringField ServiceDari;
            public StringField ServicePashto;
            public StringField ServiceEn;
            public DoubleField ServicePrice;
            public DoubleField DiscountRate;
            public BooleanField Status;

            public StringField ServiceTypeServiceTypeDari;
            public StringField ServiceTypeServiceTypePashto;
            public StringField ServiceTypeServiceTypeEn;
        }
    }
}
