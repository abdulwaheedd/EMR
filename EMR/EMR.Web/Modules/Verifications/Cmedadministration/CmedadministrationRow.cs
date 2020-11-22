
namespace EMR.Verifications.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Verifications"), TableName("[dbo].[Cmedadministration]")]
    [DisplayName("Cmedadministration"), InstanceName("Cmedadministration")]
    [ReadPermission(PermissionKeys.Cmedadministration.View)]
    public sealed class CmedadministrationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Medadmin Id"), NotNull]
        public Int64? MedadminId
        {
            get { return Fields.MedadminId[this]; }
            set { Fields.MedadminId[this] = value; }
        }

        [DisplayName("Medicine "), NotNull, Column("OrderId"), ForeignKey("[dbo].[VisitsMedicine]", "OrderId"), LeftJoin("jMedicine")]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("Comment"), Size(500), QuickSearch]
        public String Comment
        {
            get { return Fields.Comment[this]; }
            set { Fields.Comment[this] = value; }
        }

        [DisplayName("Quantity"), NotNull]
        public Int32? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Order Date (m)"), NotNull]
        public DateTime? RecDateTime
        {
            get { return Fields.RecDateTime[this]; }
            set { Fields.RecDateTime[this] = value; }
        }

        [DisplayName("Order Date (s)"), Size(50), NotNull]
        public String RecSDate
        {
            get { return Fields.RecSDate[this]; }
            set { Fields.RecSDate[this] = value; }
        }

        [DisplayName("App Date (m)")]
        public DateTime? AppDateTime
        {
            get { return Fields.AppDateTime[this]; }
            set { Fields.AppDateTime[this] = value; }
        }

        [DisplayName("App Date (s)"), Size(50)]
        public String AppSDate
        {
            get { return Fields.AppSDate[this]; }
            set { Fields.AppSDate[this] = value; }
        }


        [DisplayName("Medicine"), Expression("jMedicine.[Medicine]")]
        public String Medicine
        {
            get { return Fields.Medicine[this]; }
            set { Fields.Medicine[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MedadminId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Comment; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CmedadministrationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field MedadminId;
            public Int32Field OrderId;
            public StringField Comment;
            public Int32Field Quantity;
            public DateTimeField RecDateTime;
            public StringField RecSDate;
            public DateTimeField AppDateTime;
            public StringField AppSDate;

            public StringField Medicine;
        }
    }
}
