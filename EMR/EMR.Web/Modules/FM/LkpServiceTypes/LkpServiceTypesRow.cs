
namespace EMR.FM.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("FM"), TableName("[dbo].[LkpServiceTypes]")]
    [DisplayName("Service Types"), InstanceName("Type")]
    [ReadPermission(PermissionKeys.LkpServiceTypes.View)]
    [ModifyPermission(PermissionKeys.LkpServiceTypes.Update)]
    [InsertPermission(PermissionKeys.LkpServiceTypes.Insert)]
    [DeletePermission(PermissionKeys.LkpServiceTypes.Delete)]
    [LookupScript("FM.LkpServiceTypes")]
    public sealed class LkpServiceTypesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Service Type"), PrimaryKey,Identity]
        public Int32? ServiceTypeId
        {
            get { return Fields.ServiceTypeId[this]; }
            set { Fields.ServiceTypeId[this] = value; }
        }

        [DisplayName("Service Type (Dari)"),NotNull, Size(100), QuickSearch]
        public String ServiceTypeDari
        {
            get { return Fields.ServiceTypeDari[this]; }
            set { Fields.ServiceTypeDari[this] = value; }
        }

        [DisplayName("Service Type (Pashto)"),NotNull, Size(100)]
        public String ServiceTypePashto
        {
            get { return Fields.ServiceTypePashto[this]; }
            set { Fields.ServiceTypePashto[this] = value; }
        }

        [DisplayName("Service Type (English)"),NotNull, Size(100)]
        public String ServiceTypeEn
        {
            get { return Fields.ServiceTypeEn[this]; }
            set { Fields.ServiceTypeEn[this] = value; }
        }
        [DisplayName("Service Type"), Size(200),Expression("t0.[ServiceTypeEn]+' - '+t0.[ServiceTypeDari]+' - '+t0.[ServiceTypePashto]")]
        public String ServiceType
        {
            get { return Fields.ServiceType[this]; }
            set { Fields.ServiceType[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.ServiceTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ServiceTypeDari; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LkpServiceTypesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ServiceTypeId;
            public StringField ServiceTypeDari;
            public StringField ServiceTypePashto;
            public StringField ServiceTypeEn;
            public StringField ServiceType;
        }
    }
}
