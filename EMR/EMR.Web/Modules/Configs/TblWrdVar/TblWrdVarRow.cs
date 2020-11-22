
namespace EMR.Configs.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TblWRDVar]")]
    [DisplayName("Operations type"), InstanceName("Type")]
    [ReadPermission(PermissionKeys.TblWrdVar.View)]
    [ModifyPermission(PermissionKeys.TblWrdVar.Update)]
    [InsertPermission(PermissionKeys.TblWrdVar.Insert)]
    [DeletePermission(PermissionKeys.TblWrdVar.Delete)]
    [LookupScript("Configs.TblWrdVar")]
    public sealed class TblWrdVarRow : Row, IIdRow, INameRow
    {
        [DisplayName("Wvid"), Column("WVID"), Identity]
        public Int32? Wvid
        {
            get { return Fields.Wvid[this]; }
            set { Fields.Wvid[this] = value; }
        }

        [DisplayName("Wrdid"), Column("WRDID"), ForeignKey("[dbo].[TblWard]", "WardID"), LeftJoin("jWrdid"),LookupInclude, TextualField("WrdidWardName")]
        public Int32? Wrdid
        {
            get { return Fields.Wrdid[this]; }
            set { Fields.Wrdid[this] = value; }
        }

        [DisplayName("Diagn Treat Comp")]
        public Int32? DiagnTreatComp
        {
            get { return Fields.DiagnTreatComp[this]; }
            set { Fields.DiagnTreatComp[this] = value; }
        }

        [DisplayName("Var Name English"), Size(255), QuickSearch]
        public String VarNameEnglish
        {
            get { return Fields.VarNameEnglish[this]; }
            set { Fields.VarNameEnglish[this] = value; }
        }

        [DisplayName("Var Name Dari"), Size(255)]
        public String VarNameDari
        {
            get { return Fields.VarNameDari[this]; }
            set { Fields.VarNameDari[this] = value; }
        }

        [DisplayName("Var Name Pashto"), Size(255)]
        public String VarNamePashto
        {
            get { return Fields.VarNamePashto[this]; }
            set { Fields.VarNamePashto[this] = value; }
        }

        [DisplayName("Var Specification"), Size(255)]
        public String VarSpecification
        {
            get { return Fields.VarSpecification[this]; }
            set { Fields.VarSpecification[this] = value; }
        }

        [DisplayName("Wrdid Ward Name"), Expression("jWrdid.[WardName]")]
        public String WrdidWardName
        {
            get { return Fields.WrdidWardName[this]; }
            set { Fields.WrdidWardName[this] = value; }
        }
        [DisplayName("Ward disease type"), Expression("jWrdid.[WardNameD] +' - ' + t0.[VarNameDari]")]
        public String WwardDiseaseName
        {
            get { return Fields.WwardDiseaseName[this]; }
            set { Fields.WwardDiseaseName[this] = value; }
        }

        [DisplayName("Wrdid Ward Name D"), Expression("jWrdid.[WardNameD]")]
        public String WrdidWardNameD
        {
            get { return Fields.WrdidWardNameD[this]; }
            set { Fields.WrdidWardNameD[this] = value; }
        }

        [DisplayName("Wrdid Ward Num Beds"), Expression("jWrdid.[WardNumBeds]")]
        public Int32? WrdidWardNumBeds
        {
            get { return Fields.WrdidWardNumBeds[this]; }
            set { Fields.WrdidWardNumBeds[this] = value; }
        }

        [DisplayName("Wrdid User Name"), Expression("jWrdid.[UserName]")]
        public String WrdidUserName
        {
            get { return Fields.WrdidUserName[this]; }
            set { Fields.WrdidUserName[this] = value; }
        }

        [DisplayName("Wrdid Last Updated"), Expression("jWrdid.[LastUpdated]")]
        public DateTime? WrdidLastUpdated
        {
            get { return Fields.WrdidLastUpdated[this]; }
            set { Fields.WrdidLastUpdated[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Wvid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.WwardDiseaseName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblWrdVarRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Wvid;
            public Int32Field Wrdid;
            public Int32Field DiagnTreatComp;
            public StringField VarNameEnglish;
            public StringField VarNameDari;
            public StringField VarNamePashto;
            public StringField VarSpecification;

            public StringField WrdidWardName;
            public StringField WrdidWardNameD;
            public Int32Field WrdidWardNumBeds;
            public StringField WrdidUserName;
            public DateTimeField WrdidLastUpdated;

            public StringField WwardDiseaseName;
        }
    }
}
