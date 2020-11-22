
namespace EMR.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[Modules]")]
    [DisplayName("Modules"), InstanceName("Modules")]
    [ReadPermission(PermissionKeys.Security)]
    [ModifyPermission(PermissionKeys.Security)]
    [LookupScript("Administration.Modules")]
    public sealed class ModulesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Module Id"), Identity]
        public Int32? ModuleId
        {
            get { return Fields.ModuleId[this]; }
            set { Fields.ModuleId[this] = value; }
        }

        [DisplayName("Module Name"),NotNull, Size(50), QuickSearch]
        public String ModuleName
        {
            get { return Fields.ModuleName[this]; }
            set { Fields.ModuleName[this] = value; }
        }

        [DisplayName("Module Description"),NotNull, Size(200)]
        public String ModuleDescription
        {
            get { return Fields.ModuleDescription[this]; }
            set { Fields.ModuleDescription[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ModuleId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ModuleName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ModulesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ModuleId;
            public StringField ModuleName;
            public StringField ModuleDescription;
        }
    }
}
