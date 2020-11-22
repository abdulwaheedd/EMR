
namespace EMR.Configs.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[LkpEthnicity]")]
    [DisplayName("Ethnicity"), InstanceName("Ethnicity")]
    [ReadPermission(PermissionKeys.Ethnicity.View)]
    [ModifyPermission(PermissionKeys.Ethnicity.Update)]
    [InsertPermission(PermissionKeys.Ethnicity.Insert)]
    [DeletePermission(PermissionKeys.Ethnicity.Delete)]
    [LookupScript("Configs.LkpEthnicity")]
    public sealed class EthnicityRow : Row, IIdRow, INameRow
    {
        [DisplayName("Ethnicity Id"), Identity]
        public Int32? EthnicityId
        {
            get { return Fields.EthnicityId[this]; }
            set { Fields.EthnicityId[this] = value; }
        }

        [DisplayName("Ethnicity Name"), Size(50), NotNull, QuickSearch]
        public String EthnicityName
        {
            get { return Fields.EthnicityName[this]; }
            set { Fields.EthnicityName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EthnicityId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EthnicityName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EthnicityRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EthnicityId;
            public StringField EthnicityName;
        }
    }
}
