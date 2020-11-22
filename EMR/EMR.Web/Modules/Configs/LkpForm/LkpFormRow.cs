
namespace EMR.Configs.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[lkpForm]")]
    [DisplayName("Forms"), InstanceName("Form")]
    [ReadPermission(PermissionKeys.LkpForm.View)]
    [ModifyPermission(PermissionKeys.LkpForm.Update)]
    [InsertPermission(PermissionKeys.LkpForm.Insert)]
    [DeletePermission(PermissionKeys.LkpForm.Delete)]
    [LookupScript("Configs.lkpForm")]
    public sealed class LkpFormRow : Row, IIdRow, INameRow
    {
        [DisplayName("Form Id"), NotNull]
        public Int32? FormId
        {
            get { return Fields.FormId[this]; }
            set { Fields.FormId[this] = value; }
        }

        [DisplayName("Form Name"), Size(50), QuickSearch]
        public String FormName
        {
            get { return Fields.FormName[this]; }
            set { Fields.FormName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.FormId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FormName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LkpFormRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field FormId;
            public StringField FormName;
        }
    }
}
