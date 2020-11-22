
namespace EMR.Configs.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[lkpLosstypes]")]
    [DisplayName("Medicine loss types"), InstanceName("Type")]
    [ReadPermission(PermissionKeys.LkpLosstypes.View)]
    [ModifyPermission(PermissionKeys.LkpLosstypes.Update)]
    [InsertPermission(PermissionKeys.LkpLosstypes.Insert)]
    [DeletePermission(PermissionKeys.LkpLosstypes.Delete)]
    [LookupScript("Configs.lkpLosstypes")]
    public sealed class LkpLosstypesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Losstype Id"), Identity]
        public Int32? LosstypeId
        {
            get { return Fields.LosstypeId[this]; }
            set { Fields.LosstypeId[this] = value; }
        }

        [DisplayName("Name"), Size(50), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.LosstypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LkpLosstypesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field LosstypeId;
            public StringField Name;
        }
    }
}
