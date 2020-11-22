
namespace EMR.Pharmacy.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Pharmacy"), TableName("[dbo].[Medicinelosses]")]
    [DisplayName("Medicine Exclusion"), InstanceName("Exclusion")]
    [ReadPermission(PermissionKeys.Medicinelosses.View)]
    [ModifyPermission(PermissionKeys.Medicinelosses.Update)]
    [InsertPermission(PermissionKeys.Medicinelosses.Insert)]
    [DeletePermission(PermissionKeys.Medicinelosses.Delete)]
    public sealed class MedicinelossesRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Medicine"), NotNull, ForeignKey("[dbo].[lkpMedicine]", "MedicineId"), LeftJoin("jMedicine"), TextualField("MedicineBrandName")]
        public Int32? MedicineId
        {
            get { return Fields.MedicineId[this]; }
            set { Fields.MedicineId[this] = value; }
        }

        [DisplayName("Quantity"), NotNull]
        public Int32? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Exclusion Date"), NotNull]
        public DateTime? OutDate
        {
            get { return Fields.OutDate[this]; }
            set { Fields.OutDate[this] = value; }
        }

        [DisplayName("Losstype"), NotNull, ForeignKey("[dbo].[lkpLosstypes]", "LosstypeId"), LeftJoin("jLosstype"), TextualField("LosstypeName")]
        public Int32? LosstypeId
        {
            get { return Fields.LosstypeId[this]; }
            set { Fields.LosstypeId[this] = value; }
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

        [DisplayName("Medicine Brand Name"), Expression("jMedicine.[BrandName]")]
        public String MedicineBrandName
        {
            get { return Fields.MedicineBrandName[this]; }
            set { Fields.MedicineBrandName[this] = value; }
        }

        [DisplayName("Medicine"), Size(300), Expression("jMedicine.[GenericName] +' ' +jMedicine.[Strength]+' ( ' +jMedicine.[BrandName] + ' ) '")]
        public String MedicineGenericName
        {
            get { return Fields.MedicineGenericName[this]; }
            set { Fields.MedicineGenericName[this] = value; }
        }

        [DisplayName("Medicine Form Id"), Expression("jMedicine.[FormId]")]
        public Int32? MedicineFormId
        {
            get { return Fields.MedicineFormId[this]; }
            set { Fields.MedicineFormId[this] = value; }
        }

        [DisplayName("Medicine Quantity"), Expression("jMedicine.[Quantity]")]
        public Int32? MedicineQuantity
        {
            get { return Fields.MedicineQuantity[this]; }
            set { Fields.MedicineQuantity[this] = value; }
        }

        [DisplayName("Medicine Unit Price"), Expression("jMedicine.[UnitPrice]")]
        public Decimal? MedicineUnitPrice
        {
            get { return Fields.MedicineUnitPrice[this]; }
            set { Fields.MedicineUnitPrice[this] = value; }
        }

        [DisplayName("Medicine Expiry Date"), Expression("jMedicine.[ExpiryDate]")]
        public DateTime? MedicineExpiryDate
        {
            get { return Fields.MedicineExpiryDate[this]; }
            set { Fields.MedicineExpiryDate[this] = value; }
        }

        [DisplayName("Medicine Mid"), Expression("jMedicine.[MID]")]
        public Int32? MedicineMid
        {
            get { return Fields.MedicineMid[this]; }
            set { Fields.MedicineMid[this] = value; }
        }

        [DisplayName("Medicine Vid"), Expression("jMedicine.[VID]")]
        public Int32? MedicineVid
        {
            get { return Fields.MedicineVid[this]; }
            set { Fields.MedicineVid[this] = value; }
        }

        [DisplayName("Medicine In Date"), Expression("jMedicine.[InDate]")]
        public DateTime? MedicineInDate
        {
            get { return Fields.MedicineInDate[this]; }
            set { Fields.MedicineInDate[this] = value; }
        }

        [DisplayName("Medicine Reorder Level"), Expression("jMedicine.[ReorderLevel]")]
        public Int32? MedicineReorderLevel
        {
            get { return Fields.MedicineReorderLevel[this]; }
            set { Fields.MedicineReorderLevel[this] = value; }
        }

        [DisplayName("Medicine Quantity Used"), Expression("jMedicine.[QuantityUsed]")]
        public Int32? MedicineQuantityUsed
        {
            get { return Fields.MedicineQuantityUsed[this]; }
            set { Fields.MedicineQuantityUsed[this] = value; }
        }

        [DisplayName("Medicine Discontinue"), Expression("jMedicine.[Discontinue]")]
        public Boolean? MedicineDiscontinue
        {
            get { return Fields.MedicineDiscontinue[this]; }
            set { Fields.MedicineDiscontinue[this] = value; }
        }

        [DisplayName("Medicine User Id"), Expression("jMedicine.[UserId]")]
        public Int32? MedicineUserId
        {
            get { return Fields.MedicineUserId[this]; }
            set { Fields.MedicineUserId[this] = value; }
        }

        [DisplayName("Medicine Updated"), Expression("jMedicine.[Updated]")]
        public DateTime? MedicineUpdated
        {
            get { return Fields.MedicineUpdated[this]; }
            set { Fields.MedicineUpdated[this] = value; }
        }

        [DisplayName("Medicine Batch No"), Expression("jMedicine.[BatchNo]")]
        public String MedicineBatchNo
        {
            get { return Fields.MedicineBatchNo[this]; }
            set { Fields.MedicineBatchNo[this] = value; }
        }

        [DisplayName("Medicine Strength"), Expression("jMedicine.[Strength]")]
        public String MedicineStrength
        {
            get { return Fields.MedicineStrength[this]; }
            set { Fields.MedicineStrength[this] = value; }
        }

        [DisplayName("Medicine S Expiry Date"), Expression("jMedicine.[SExpiryDate]")]
        public String MedicineSExpiryDate
        {
            get { return Fields.MedicineSExpiryDate[this]; }
            set { Fields.MedicineSExpiryDate[this] = value; }
        }

        [DisplayName("Medicine S In Date"), Expression("jMedicine.[SInDate]")]
        public String MedicineSInDate
        {
            get { return Fields.MedicineSInDate[this]; }
            set { Fields.MedicineSInDate[this] = value; }
        }

        [DisplayName("Exclusion Type"), Expression("jLosstype.[Name]")]
        public String LosstypeName
        {
            get { return Fields.LosstypeName[this]; }
            set { Fields.LosstypeName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MedicinelossesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field MedicineId;
            public Int32Field Quantity;
            public DateTimeField OutDate;
            public Int32Field LosstypeId;
            public Int32Field UserId;
            public DateTimeField Updated;

            public StringField MedicineBrandName;
            public StringField MedicineGenericName;
            public Int32Field MedicineFormId;
            public Int32Field MedicineQuantity;
            public DecimalField MedicineUnitPrice;
            public DateTimeField MedicineExpiryDate;
            public Int32Field MedicineMid;
            public Int32Field MedicineVid;
            public DateTimeField MedicineInDate;
            public Int32Field MedicineReorderLevel;
            public Int32Field MedicineQuantityUsed;
            public BooleanField MedicineDiscontinue;
            public Int32Field MedicineUserId;
            public DateTimeField MedicineUpdated;
            public StringField MedicineBatchNo;
            public StringField MedicineStrength;
            public StringField MedicineSExpiryDate;
            public StringField MedicineSInDate;

            public StringField LosstypeName;
        }
    }
}
