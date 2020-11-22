
namespace EMR.Configs.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TblProfessions]")]
    [DisplayName("Professions"), InstanceName("Profession")]
    [ReadPermission(PermissionKeys.TblProfessions.View)]
    [ModifyPermission(PermissionKeys.TblProfessions.Update)]
    [InsertPermission(PermissionKeys.TblProfessions.Insert)]
    [DeletePermission(PermissionKeys.TblProfessions.Delete)]
    public sealed class TblProfessionsRow : Row, IIdRow, INameRow
    {

        [DisplayName("Pro Id"), Column("proID"), Identity]
        public Int32? ProId
        {
            get { return Fields.ProId[this]; }
            set { Fields.ProId[this] = value; }
        }

        [DisplayName("Profession (English)"), Size(255), NotNull, QuickSearch]
        public String ProName
        {
            get { return Fields.ProName[this]; }
            set { Fields.ProName[this] = value; }
        }

        [DisplayName("Profession (Dari)"), Size(255), NotNull]
        public String ProNameD
        {
            get { return Fields.ProNameD[this]; }
            set { Fields.ProNameD[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.ProId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblProfessionsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field ProId;

            public StringField ProName;

            public StringField ProNameD;


		}
    }
}
