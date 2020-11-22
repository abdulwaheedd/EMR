
namespace EMR.Configs.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[lkpUnit]")]
    [DisplayName("Units"), InstanceName("Unit")]
    [ReadPermission(PermissionKeys.LkpUnit.View)]
    [ModifyPermission(PermissionKeys.LkpUnit.Update)]
    [InsertPermission(PermissionKeys.LkpUnit.Insert)]
    [DeletePermission(PermissionKeys.LkpUnit.Delete)]
    [LookupScript("Configs.lkpUnit")]
    public sealed class LkpUnitRow : Row, IIdRow, INameRow
    {
        [DisplayName("Unit Id"), NotNull]
        public Int32? UnitId
        {
            get { return Fields.UnitId[this]; }
            set { Fields.UnitId[this] = value; }
        }

        [DisplayName("Unit Name"), Size(50), QuickSearch]
        public String UnitName
        {
            get { return Fields.UnitName[this]; }
            set { Fields.UnitName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UnitId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.UnitName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LkpUnitRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UnitId;
            public StringField UnitName;
        }
    }
}
