
namespace EMR.Pharmacy.Entities
{
    using EMR.Configs.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Pharmacy"), TableName("[dbo].[lkpMedicine]")]
    [DisplayName("Medicines"), InstanceName("Medicines")]
    [ReadPermission(PermissionKeys.Medicines.View)]
    [ModifyPermission(PermissionKeys.Medicines.Update)]
    [InsertPermission(PermissionKeys.Medicines.Insert)]
    [DeletePermission(PermissionKeys.Medicines.Delete)]
    [LookupScript("Pharmacy.Medicines")]
    public sealed class MedicinesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Medicine Id"),Identity,PrimaryKey]
        public Int32? MedicineId
        {
            get { return Fields.MedicineId[this]; }
            set { Fields.MedicineId[this] = value; }
        }

        [DisplayName("Brand Name"), Size(255), QuickSearch]
        public String BrandName
        {
            get { return Fields.BrandName[this]; }
            set { Fields.BrandName[this] = value; }
        }

        [DisplayName("Generic Name"),NotNull, Size(255)]
        public String GenericName
        {
            get { return Fields.GenericName[this]; }
            set { Fields.GenericName[this] = value; }
        }

        [LookupEditor(typeof(LkpFormRow))]
        [DisplayName("Form"), Required, ForeignKey("[dbo].[lkpForm]", "FormId"), LeftJoin("jForm"), TextualField("FormFormName")]
        public Int32? FormId
        {
            get { return Fields.FormId[this]; }
            set { Fields.FormId[this] = value; }
        }

        [DisplayName("Strength"), Column("Strength"), NotNull, QuickSearch]
        public String Strength
        {
            get { return Fields.Strength[this]; }
            set { Fields.Strength[this] = value; }
        }

        [DisplayName("Batch No"), Required, QuickSearch]
        public String BatchNo
        {
            get { return Fields.BatchNo[this]; }
            set { Fields.BatchNo[this] = value; }
        }

        [DisplayName("Quantity")]
        public Int32? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Unit Price"), Size(18)]
        public Decimal? UnitPrice
        {
            get { return Fields.UnitPrice[this]; }
            set { Fields.UnitPrice[this] = value; }
        }

        [DisplayName("Expiry Date"),NotNull]
        public DateTime? ExpiryDate
        {
            get { return Fields.ExpiryDate[this]; }
            set { Fields.ExpiryDate[this] = value; }
        }

        [DisplayName("Manufacturer"), Required, Column("MID"), ForeignKey("[dbo].[lkpManufacturer]", "ManufacturerId"), LeftJoin("jMid"), TextualField("MidManufacturerName")]
        public Int32? Mid
        {
            get { return Fields.Mid[this]; }
            set { Fields.Mid[this] = value; }
        }

        [DisplayName("Supplier"), Required, Column("VID"), ForeignKey("[dbo].[lkpVendor]", "VendorId"), LeftJoin("jVid"), TextualField("VidVendorName")]
        public Int32? Vid
        {
            get { return Fields.Vid[this]; }
            set { Fields.Vid[this] = value; }
        }

        [DisplayName("In Date")]
        public DateTime? InDate
        {
            get { return Fields.InDate[this]; }
            set { Fields.InDate[this] = value; }
        }

        [DisplayName("Reorder Level")]
        public Int32? ReorderLevel
        {
            get { return Fields.ReorderLevel[this]; }
            set { Fields.ReorderLevel[this] = value; }
        }

        [DisplayName("Qty Used")]
        public Int32? QuantityUsed
        {
            get { return Fields.QuantityUsed[this]; }
            set { Fields.QuantityUsed[this] = value; }
        }

        [DisplayName("Discontinue")]
        public Boolean? Discontinue
        {
            get { return Fields.Discontinue[this]; }
            set { Fields.Discontinue[this] = value; }
        }

        [DisplayName("Form"), Expression("jForm.[FormName]")]
        public String FormFormName
        {
            get { return Fields.FormFormName[this]; }
            set { Fields.FormFormName[this] = value; }
        }


        [DisplayName("Manufacturer"), Expression("jMid.[ManufacturerName]")]
        public String MidManufacturerName
        {
            get { return Fields.MidManufacturerName[this]; }
            set { Fields.MidManufacturerName[this] = value; }
        }

        [DisplayName("Supplier"), Expression("jVid.[VendorName]")]
        public String VidVendorName
        {
            get { return Fields.VidVendorName[this]; }
            set { Fields.VidVendorName[this] = value; }
        }
        
        [DisplayName("Shamsi Expiry")]
        public String SExpiryDate
        {
            get { return Fields.SExpiryDate[this]; }
            set { Fields.SExpiryDate[this] = value; }
        }
        
        [DisplayName("Shamsi InDate")]
        public String SInDate
        {
            get { return Fields.SInDate[this]; }
            set { Fields.SInDate[this] = value; }
        }

        [DisplayName("Medicine Name"), Size(300), Expression("t0.[GenericName] +' ' +t0.[Strength]+' ( ' +t0.[BrandName] + ' ) '")]
        public String MedicineName
        {
            get { return Fields.MedicineName[this]; }
            set { Fields.MedicineName[this] = value; }
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

        [DisplayName("Expiring"),Expression("DATEDIFF(Day,GETDATE(),t0.[ExpiryDate])")]
        public int? DaysToExpire
        {
            get { return Fields.DaysToExpire[this]; }
            set { Fields.DaysToExpire[this] = value; }
        }

        [DisplayName("Remain(%)"),Expression("(t0.[Quantity]-isnull(t0.[QuantityUsed],0))*100/t0.[Quantity]")]
        public int? Balance
        {
            get { return Fields.Balance[this]; }
            set { Fields.Balance[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.MedicineId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.MedicineName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MedicinesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MedicineId;
            public StringField BrandName;
            public StringField GenericName;
            public Int32Field FormId;
            public StringField Strength;
            public Int32Field Quantity;
            public DecimalField UnitPrice;
            public DateTimeField ExpiryDate;
            public Int32Field Mid;
            public Int32Field Vid;
            public DateTimeField InDate;
            public Int32Field ReorderLevel;
            public Int32Field QuantityUsed;
            public BooleanField Discontinue;
            public StringField BatchNo;

            public StringField SExpiryDate;
            public StringField SInDate;

            public StringField FormFormName;

            public StringField MidManufacturerName;
            public StringField VidVendorName;

            public StringField MedicineName;
            public Int32Field DaysToExpire;
            public Int32Field Balance;

            public Int32Field UserId;
            public DateTimeField Updated;
        }
    }
}
