
namespace EMR.Register.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Register"), TableName("[dbo].[Nameslist]")]
    [DisplayName("Nameslist"), InstanceName("Nameslist")]
    [ReadPermission(PermissionKeys.Nameslist.View)]
    [ModifyPermission(PermissionKeys.Nameslist.Update)]
    [InsertPermission(PermissionKeys.Nameslist.Insert)]
    [DeletePermission(PermissionKeys.Nameslist.Delete)]
    [LookupScript("Register.NameslistRow")]
    public sealed class NameslistRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Short Name"), Size(100), NotNull, QuickSearch]
        public String ShortName
        {
            get { return Fields.ShortName[this]; }
            set { Fields.ShortName[this] = value; }
        }

        [DisplayName("Full Name"), Size(100), NotNull]
        public String FullName
        {
            get { return Fields.FullName[this]; }
            set { Fields.FullName[this] = value; }
        }

        [DisplayName("Facility Id")]
        public Int32? FacilityId
        {
            get { return Fields.FacilityId[this]; }
            set { Fields.FacilityId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FullName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public NameslistRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField ShortName;
            public StringField FullName;
            public Int32Field FacilityId;
        }
    }
}
