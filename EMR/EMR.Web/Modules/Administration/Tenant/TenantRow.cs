
namespace EMR.Administration.Entities
{
    using EMR.Administration;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[Tenants]"), DisplayName("Tenants"), InstanceName("Tenant"), TwoLevelCached]
    [ReadPermission(PermissionKeys.Tenants)]
    [ModifyPermission(PermissionKeys.Tenants)]
    [LookupScript("Administration.Tenant")]
    public sealed class TenantRow : Row, IIdRow, INameRow
    {
        [DisplayName("Tenant Id"), Identity]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        [DisplayName("Tenant"), Size(100), NotNull, QuickSearch]
        public String TenantName
        {
            get { return Fields.TenantName[this]; }
            set { Fields.TenantName[this] = value; }
        }
        [DisplayName("Facility ID"), NotNull, QuickSearch, Column("FacilityID"), ForeignKey("[dbo].[FacilityInfo]", "FacilityID"), LeftJoin("jFacility")]
        public Int32? FacilityId
        {
            get { return Fields.FacilityId[this]; }
            set { Fields.FacilityId[this] = value; }
        }

        [DisplayName("Facility"), Size(200), QuickSearch]
        [Expression("jFacility.[FacilityName]")]
        public String FacilityName
        {
            get { return Fields.FacilityName[this]; }
            set { Fields.FacilityName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TenantId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TenantName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TenantRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TenantId;
            public Int32Field FacilityId;
            public StringField TenantName;
            public StringField FacilityName;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Administration.Tenant";
            }
        }
    }
}
