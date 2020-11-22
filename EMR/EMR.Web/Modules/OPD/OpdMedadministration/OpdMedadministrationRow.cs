
namespace EMR.OPD.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Medadmins"), TableName("[dbo].[Medadministration]")]
    [DisplayName("Medicine administration"), InstanceName("Administration")]
    [ReadPermission(PermissionKeys.Medadministration.View)]
    [ModifyPermission(PermissionKeys.Medadministration.Update)]
    [InsertPermission(PermissionKeys.Medadministration.Insert)]
    [DeletePermission(PermissionKeys.Medadministration.Delete)]
    public sealed class OpdMedadministrationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Medadmin Id"), Identity]
        public Int64? MedadminId
        {
            get { return Fields.MedadminId[this]; }
            set { Fields.MedadminId[this] = value; }
        }

        [DisplayName("Medicine "), Column("OrderId"), ForeignKey("[dbo].[VisitsMedicine]", "OrderId"), LeftJoin("jMedicine")]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("Comments"), Size(500), QuickSearch]
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

        [DisplayName("Recom. Date Time"), NotNull]
        public DateTime? RecDateTime
        {
            get { return Fields.RecDateTime[this]; }
            set { Fields.RecDateTime[this] = value; }
        }

        [DisplayName("Recom. Date Time (Shamsi)"), Size(50), NotNull]
        public String RecSDate
        {
            get { return Fields.RecSDate[this]; }
            set { Fields.RecSDate[this] = value; }
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

        [DisplayName("Admin Date Time")]
        public DateTime? AppDateTime
        {
            get { return Fields.AppDateTime[this]; }
            set { Fields.AppDateTime[this] = value; }
        }

        [DisplayName("Admin Date (Shamsi)"), Size(50)]
        public String AppSDate
        {
            get { return Fields.AppSDate[this]; }
            set { Fields.AppSDate[this] = value; }
        }

        [DisplayName("App User Id")]
        public Int32? AppUserId
        {
            get { return Fields.AppUserId[this]; }
            set { Fields.AppUserId[this] = value; }
        }

        [DisplayName("App Updated")]
        public DateTime? AppUpdated
        {
            get { return Fields.AppUpdated[this]; }
            set { Fields.AppUpdated[this] = value; }
        }
        
        [DisplayName("Medicine"),Expression("jMedicine.[Medicine]")]
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

        public OpdMedadministrationRow()
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
            public Int32Field UserId;
            public DateTimeField Updated;
            public DateTimeField AppDateTime;
            public StringField AppSDate;
            public Int32Field AppUserId;
            public DateTimeField AppUpdated;

            public StringField Medicine;
        }
    }
}
