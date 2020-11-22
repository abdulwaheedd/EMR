
namespace EMR.Configs.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[LkpTestTypes]")]
    [DisplayName("Test Types"), InstanceName("Test Type")]
    [ReadPermission(PermissionKeys.LkpTestTypes.View)]
    [ModifyPermission(PermissionKeys.LkpTestTypes.Update)]
    [InsertPermission(PermissionKeys.LkpTestTypes.Insert)]
    [DeletePermission(PermissionKeys.LkpTestTypes.Delete)]
    [LookupScript("Configs.LkpTestTypes")]
    public sealed class LkpTestTypesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Test Type Id"), Identity]
        public Int32? TestTypeId
        {
            get { return Fields.TestTypeId[this]; }
            set { Fields.TestTypeId[this] = value; }
        }

        [DisplayName("Test Type Name"), Size(100), QuickSearch]
        public String TestTypeName
        {
            get { return Fields.TestTypeName[this]; }
            set { Fields.TestTypeName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TestTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TestTypeName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LkpTestTypesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TestTypeId;
            public StringField TestTypeName;
        }
    }
}
