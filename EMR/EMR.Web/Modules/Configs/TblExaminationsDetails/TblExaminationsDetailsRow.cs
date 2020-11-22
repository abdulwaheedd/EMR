
namespace EMR.Configs.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TblExaminationsDetails]")]
    [DisplayName("Exam details"), InstanceName("Exam")]
    [ReadPermission(PermissionKeys.TblExaminationsDetails.View)]
    [ModifyPermission(PermissionKeys.TblExaminationsDetails.Update)]
    [InsertPermission(PermissionKeys.TblExaminationsDetails.Insert)]
    [DeletePermission(PermissionKeys.TblExaminationsDetails.Delete)]
    [LookupScript("Configs.TblExaminationsDetails")]
    public sealed class TblExaminationsDetailsRow : Row, IIdRow, INameRow
    {

        [DisplayName("Edid"), Column("EDID"), PrimaryKey]
        public Int32? Edid
        {
            get { return Fields.Edid[this]; }
            set { Fields.Edid[this] = value; }
        }

        [ForeignKey("[dbo].[TblDept]", "DpId"), LeftJoin("jDept"),LookupInclude]

        [DisplayName("Dept Id"), Column("dpID"), NotNull]
        public Int32? DpId
        {
            get { return Fields.DpId[this]; }
            set { Fields.DpId[this] = value; }
        }

        [DisplayName("Exam name"), Column("EDName"), Size(50), NotNull, QuickSearch]
        public String EdName
        {
            get { return Fields.EdName[this]; }
            set { Fields.EdName[this] = value; }
        }

        [DisplayName("Department"), Expression("jDept.[DeptNameD]"), Size(50), NotNull, QuickSearch]
        public String DepartmentName
        {
            get { return Fields.DepartmentName[this]; }
            set { Fields.DepartmentName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Edid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EdName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblExaminationsDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Edid;

            public Int32Field DpId;

            public StringField EdName;
            public StringField DepartmentName;

		}
    }
}
