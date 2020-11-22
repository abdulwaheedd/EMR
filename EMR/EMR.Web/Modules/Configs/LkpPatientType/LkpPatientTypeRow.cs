
namespace EMR.Configs.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[LkpPatientType]")]
    [DisplayName("Patient Types"), InstanceName("Type")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Configs.LkpPatientType")]
    public sealed class LkpPatientTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Type Id"), Identity]
        public Int32? TypeId
        {
            get { return Fields.TypeId[this]; }
            set { Fields.TypeId[this] = value; }
        }

        [DisplayName("Type Name En"), Size(50), QuickSearch]
        public String TypeNameEn
        {
            get { return Fields.TypeNameEn[this]; }
            set { Fields.TypeNameEn[this] = value; }
        }

        [DisplayName("Type Name Dari"), Size(50)]
        public String TypeNameDari
        {
            get { return Fields.TypeNameDari[this]; }
            set { Fields.TypeNameDari[this] = value; }
        }

        [DisplayName("Type Name Pashto"), Size(50)]
        public String TypeNamePashto
        {
            get { return Fields.TypeNamePashto[this]; }
            set { Fields.TypeNamePashto[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TypeNameEn; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LkpPatientTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TypeId;
            public StringField TypeNameEn;
            public StringField TypeNameDari;
            public StringField TypeNamePashto;
        }
    }
}
