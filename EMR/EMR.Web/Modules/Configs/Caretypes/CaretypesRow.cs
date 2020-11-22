
namespace EMR.Configs.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[lkpCaretypes]")]
    [DisplayName("Caretypes"), InstanceName("Caretypes")]
    [LookupScript("Configs.lkpCaretypes")]
    [ReadPermission(PermissionKeys.Caretypes.View)]
    [ModifyPermission(PermissionKeys.Caretypes.Update)]
    [InsertPermission(PermissionKeys.Caretypes.Insert)]
    [DeletePermission(PermissionKeys.Caretypes.Delete)]
    public sealed class CaretypesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Caretype"), Size(50), QuickSearch]
        public String Caretype
        {
            get { return Fields.Caretype[this]; }
            set { Fields.Caretype[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Caretype; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CaretypesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Caretype;
        }
    }
}
