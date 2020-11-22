
namespace EMR.Configs.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[lkpCycles]")]
    [DisplayName("Cycles"), InstanceName("Cycles")]
    [ReadPermission(PermissionKeys.Cycles.View)]
    [ModifyPermission(PermissionKeys.Cycles.Update)]
    [InsertPermission(PermissionKeys.Cycles.Insert)]
    [DeletePermission(PermissionKeys.Cycles.Delete)]
    [LookupScript("Configs.lkpCycles")]
    public sealed class CyclesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cycle Id"), Identity]
        public Int32? CycleId
        {
            get { return Fields.CycleId[this]; }
            set { Fields.CycleId[this] = value; }
        }

        [DisplayName("Cyclename"), Size(50), QuickSearch]
        public String Cyclename
        {
            get { return Fields.Cyclename[this]; }
            set { Fields.Cyclename[this] = value; }
        }

        [DisplayName("Cycledescription"), Size(200)]
        public String Cycledescription
        {
            get { return Fields.Cycledescription[this]; }
            set { Fields.Cycledescription[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CycleId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Cyclename; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CyclesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CycleId;
            public StringField Cyclename;
            public StringField Cycledescription;
        }
    }
}
