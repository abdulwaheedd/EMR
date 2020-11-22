
namespace EMR.Configs.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TblDiseases_Category]")]
    [DisplayName("Diseases category"), InstanceName("Category")]
    [ReadPermission(PermissionKeys.TblDiseasesCategory.View)]
    [ModifyPermission(PermissionKeys.TblDiseasesCategory.Update)]
    [InsertPermission(PermissionKeys.TblDiseasesCategory.Insert)]
    [DeletePermission(PermissionKeys.TblDiseasesCategory.Delete)]
    public sealed class TblDiseasesCategoryRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Column("ID"), PrimaryKey]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Wardid"), Column("WARDID")]
        public Int32? Wardid
        {
            get { return Fields.Wardid[this]; }
            set { Fields.Wardid[this] = value; }
        }

        [DisplayName("Category (English)"), Column("Diseases_Category"), Size(255), QuickSearch]
        public String DiseasesCategory
        {
            get { return Fields.DiseasesCategory[this]; }
            set { Fields.DiseasesCategory[this] = value; }
        }

        [DisplayName("Category (Dari)"), Column("Diseases_Cat_Dari"), Size(255)]
        public String DiseasesCatDari
        {
            get { return Fields.DiseasesCatDari[this]; }
            set { Fields.DiseasesCatDari[this] = value; }
        }

        [DisplayName("Category (Pashto)"), Column("Diseases_Cat_Pashto"), Size(255)]
        public String DiseasesCatPashto
        {
            get { return Fields.DiseasesCatPashto[this]; }
            set { Fields.DiseasesCatPashto[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DiseasesCategory; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblDiseasesCategoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public Int32Field Wardid;

            public StringField DiseasesCategory;

            public StringField DiseasesCatDari;

            public StringField DiseasesCatPashto;


		}
    }
}
