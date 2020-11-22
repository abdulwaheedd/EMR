
namespace EMR.Verifications.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Verifications"), TableName("[dbo].[Cmedprescriptions]")]
    [DisplayName("Rx"), InstanceName("Rx")]
    [ReadPermission(PermissionKeys.Cmedprescriptions.View)]
    public sealed class CmedprescriptionsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Order Id"), NotNull]
        public Int64? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("Mrid"), Column("MRID"), NotNull]
        public Int64? Mrid
        {
            get { return Fields.Mrid[this]; }
            set { Fields.Mrid[this] = value; }
        }

        [DisplayName("Visit Id"), NotNull]
        public Int64? VisitId
        {
            get { return Fields.VisitId[this]; }
            set { Fields.VisitId[this] = value; }
        }

        [DisplayName("Visit Date (m)"), NotNull]
        public DateTime? DateOfVisit
        {
            get { return Fields.DateOfVisit[this]; }
            set { Fields.DateOfVisit[this] = value; }
        }

        [DisplayName("Visit Date (s)"), Size(50), QuickSearch]
        public String SDateOfVisit
        {
            get { return Fields.SDateOfVisit[this]; }
            set { Fields.SDateOfVisit[this] = value; }
        }

        [DisplayName("Medicine"), NotNull, Column("MedicineId"), ForeignKey("[dbo].[lkpMedicine]", "MedicineId"), LeftJoin("jMedicine")]

        public Int32? MedicineId
        {
            get { return Fields.MedicineId[this]; }
            set { Fields.MedicineId[this] = value; }
        }

        [DisplayName("Quantity")]
        public Int32? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Daily Dose"), Size(50)]
        public String DailyDose
        {
            get { return Fields.DailyDose[this]; }
            set { Fields.DailyDose[this] = value; }
        }

        [DisplayName("Comment"), Size(100)]
        public String Comment
        {
            get { return Fields.Comment[this]; }
            set { Fields.Comment[this] = value; }
        }

        [DisplayName("Inside Sale")]
        public Boolean? InsideSale
        {
            get { return Fields.InsideSale[this]; }
            set { Fields.InsideSale[this] = value; }
        }
        [DisplayName("Medicine"), QuickSearch, Expression("jMedicine.[GenericName]")]
        public String MedicineName
        {
            get { return Fields.MedicineName[this]; }
            set { Fields.MedicineName[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.OrderId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SDateOfVisit; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CmedprescriptionsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field OrderId;
            public Int64Field Mrid;
            public Int64Field VisitId;
            public DateTimeField DateOfVisit;
            public StringField SDateOfVisit;
            public Int32Field MedicineId;
            public Int32Field Quantity;
            public StringField DailyDose;
            public StringField Comment;
            public BooleanField InsideSale;

            public StringField MedicineName;

        }
    }
}
