
namespace EMR.Pharmacy.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Pharmacy"), TableName("[dbo].[MedPrescriptions]")]
    [DisplayName("Prescriptions"), InstanceName("Prescription")]
    [ReadPermission(PermissionKeys.MedPrescriptions.View)]
    [ModifyPermission(PermissionKeys.MedPrescriptions.Update)]
    [InsertPermission(PermissionKeys.MedPrescriptions.Insert)]
    [DeletePermission(PermissionKeys.MedPrescriptions.Delete)]
    public sealed class MedPrescriptionsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Order Id"), Identity]
        public Int64? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("VisitId"), Column("VisitId"), NotNull]
        public Int32? VisitId
        {
            get { return Fields.VisitId[this]; }
            set { Fields.VisitId[this] = value; }
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

        [DisplayName("Daily Dose"), Size(50), QuickSearch]
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


        [DisplayName("User Id")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Updated")]
        public DateTime? Updated
        {
            get { return Fields.Updated[this]; }
            set { Fields.Updated[this] = value; }
        }

        [DisplayName("Medicine"), QuickSearch, Expression("jMedicine.[GenericName]")]
        public String MedicineName
        {
            get { return Fields.MedicineName[this]; }
            set { Fields.MedicineName[this] = value; }
        }

        [DisplayName("Stock Sale")]
        public Boolean? InsideSale
        {
            get { return Fields.InsideSale[this]; }
            set { Fields.InsideSale[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.OrderId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DailyDose; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MedPrescriptionsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field OrderId;
            public Int32Field VisitId;
            public Int32Field MedicineId;
            public Int32Field Quantity;
            public StringField DailyDose;
            public StringField Comment;
            public Int32Field UserId;
            public DateTimeField Updated;
            public BooleanField InsideSale;

            public StringField MedicineName;
        }
    }
}
