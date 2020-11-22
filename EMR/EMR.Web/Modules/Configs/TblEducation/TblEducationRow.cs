
namespace EMR.Configs.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TblEducation]")]
    [DisplayName("Education"), InstanceName("Education")]
    [ReadPermission(PermissionKeys.TblEducation.View)]
    [ModifyPermission(PermissionKeys.TblEducation.Update)]
    [InsertPermission(PermissionKeys.TblEducation.Insert)]
    [DeletePermission(PermissionKeys.TblEducation.Delete)]
    [LookupScript("Configs.TblEducation")]
    public sealed class TblEducationRow : Row, IIdRow, INameRow
    {

        [DisplayName("Eid"), Column("EID"), PrimaryKey]
        public Int32? Eid
        {
            get { return Fields.Eid[this]; }
            set { Fields.Eid[this] = value; }
        }

        [DisplayName("Education Dari"), Size(50), NotNull, QuickSearch]
        public String EducationDari
        {
            get { return Fields.EducationDari[this]; }
            set { Fields.EducationDari[this] = value; }
        }

        [DisplayName("Education Eng"), Size(50), NotNull]
        public String EducationEng
        {
            get { return Fields.EducationEng[this]; }
            set { Fields.EducationEng[this] = value; }
        }
        
        [DisplayName("Education"), Expression("t0.[EducationEng]+' - '+t0.[EducationDari]")]
        public String EducationName
        {
            get { return Fields.EducationName[this]; }
            set { Fields.EducationName[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.Eid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EducationName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblEducationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Eid;

            public StringField EducationDari;

            public StringField EducationEng;
            public StringField EducationName;

		}
    }
}
