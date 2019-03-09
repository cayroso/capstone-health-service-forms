using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace hsforms.web.Migrations
{
    public partial class AppDbSchema : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Role",
                columns: table => new
                {
                    RoleId = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Role", x => x.RoleId);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    UserName = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    MiddleName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Phone = table.Column<string>(nullable: true),
                    Mobile = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "FP",
                columns: table => new
                {
                    TCL_FPId = table.Column<string>(nullable: false),
                    Barangay = table.Column<string>(nullable: true),
                    Municipality = table.Column<string>(nullable: true),
                    Province = table.Column<string>(nullable: true),
                    Region = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FP", x => x.TCL_FPId);
                    table.ForeignKey(
                        name: "FK_FP_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "NEPI",
                columns: table => new
                {
                    TCL_NEPIId = table.Column<string>(nullable: false),
                    Barangay = table.Column<string>(nullable: true),
                    Municipality = table.Column<string>(nullable: true),
                    Province = table.Column<string>(nullable: true),
                    Region = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NEPI", x => x.TCL_NEPIId);
                    table.ForeignKey(
                        name: "FK_NEPI_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PNC",
                columns: table => new
                {
                    TCL_PNCId = table.Column<string>(nullable: false),
                    Barangay = table.Column<string>(nullable: true),
                    Municipality = table.Column<string>(nullable: true),
                    Province = table.Column<string>(nullable: true),
                    Region = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PNC", x => x.TCL_PNCId);
                    table.ForeignKey(
                        name: "FK_PNC_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserRole",
                columns: table => new
                {
                    UserRoleId = table.Column<string>(nullable: false),
                    UserId = table.Column<string>(nullable: false),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserRole", x => x.UserRoleId);
                    table.ForeignKey(
                        name: "FK_UserRole_Role_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Role",
                        principalColumn: "RoleId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserRole_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FPEntry",
                columns: table => new
                {
                    TCL_FP_EntryId = table.Column<string>(nullable: false),
                    TCL_FPId = table.Column<string>(nullable: false),
                    DateOfRegistration = table.Column<DateTime>(nullable: false),
                    FamilySerialNumber = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    BirthDate = table.Column<DateTime>(nullable: false),
                    TypeOfClient = table.Column<string>(nullable: true),
                    PresentMethod = table.Column<string>(nullable: true),
                    PreviousMethod = table.Column<string>(nullable: true),
                    DateNextService1 = table.Column<DateTime>(nullable: true),
                    DateAccomplishedService1 = table.Column<DateTime>(nullable: true),
                    DateNextService2S = table.Column<DateTime>(nullable: true),
                    DateAccomplishedService2 = table.Column<DateTime>(nullable: true),
                    DateNextService3 = table.Column<DateTime>(nullable: true),
                    DateAccomplishedService3 = table.Column<DateTime>(nullable: true),
                    DateNextService4 = table.Column<DateTime>(nullable: true),
                    DateAccomplishedService4 = table.Column<DateTime>(nullable: true),
                    DateNextService5 = table.Column<DateTime>(nullable: true),
                    DateAccomplishedService5 = table.Column<DateTime>(nullable: true),
                    DateNextService6 = table.Column<DateTime>(nullable: true),
                    DateAccomplishedService6 = table.Column<DateTime>(nullable: true),
                    DateNextService7 = table.Column<DateTime>(nullable: true),
                    DateAccomplishedService7 = table.Column<DateTime>(nullable: true),
                    DateNextService8 = table.Column<DateTime>(nullable: true),
                    DateAccomplishedService8 = table.Column<DateTime>(nullable: true),
                    DateNextService9 = table.Column<DateTime>(nullable: true),
                    DateAccomplishedService9 = table.Column<DateTime>(nullable: true),
                    DateNextService10 = table.Column<DateTime>(nullable: true),
                    DateAccomplishedService10 = table.Column<DateTime>(nullable: true),
                    DateNextService11 = table.Column<DateTime>(nullable: true),
                    DateAccomplishedService11 = table.Column<DateTime>(nullable: true),
                    DateNextService12 = table.Column<DateTime>(nullable: true),
                    DateAccomplishedService12 = table.Column<DateTime>(nullable: true),
                    DropoutDate = table.Column<DateTime>(nullable: true),
                    DropoutReason = table.Column<string>(nullable: true),
                    Remakrs = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FPEntry", x => x.TCL_FP_EntryId);
                    table.ForeignKey(
                        name: "FK_FPEntry_FP_TCL_FPId",
                        column: x => x.TCL_FPId,
                        principalTable: "FP",
                        principalColumn: "TCL_FPId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "NEPIEntry",
                columns: table => new
                {
                    TCL_NEPI_EntryId = table.Column<string>(nullable: false),
                    TCL_NEPIId = table.Column<string>(nullable: false),
                    DateOfRegistration = table.Column<DateTime>(nullable: true),
                    DateOfBirth = table.Column<DateTime>(nullable: false),
                    FamilySerialNumber = table.Column<string>(nullable: true),
                    NHTS = table.Column<string>(nullable: true),
                    NameOfChild = table.Column<string>(nullable: true),
                    Weight = table.Column<decimal>(nullable: false),
                    Height = table.Column<decimal>(nullable: false),
                    Gender = table.Column<string>(nullable: true),
                    NameOfMother = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    DateNewbornScreeningReferral = table.Column<DateTime>(nullable: true),
                    DateNewbornScreeningDone = table.Column<DateTime>(nullable: true),
                    CPABTTStatus = table.Column<string>(nullable: true),
                    CPABTTAssessed = table.Column<DateTime>(nullable: true),
                    ChildExclusiveBreastFeed1 = table.Column<bool>(nullable: false),
                    ChildExclusiveBreastFeed2 = table.Column<bool>(nullable: false),
                    ChildExclusiveBreastFeed3 = table.Column<bool>(nullable: false),
                    ChildExclusiveBreastFeed4 = table.Column<bool>(nullable: false),
                    ChildExclusiveBreastFeed5 = table.Column<bool>(nullable: false),
                    ChildExclusiveBreastFeed6 = table.Column<DateTime>(nullable: true),
                    ComplimentaryFeeding6 = table.Column<bool>(nullable: false),
                    ComplimentaryFeeding7 = table.Column<bool>(nullable: false),
                    ComplimentaryFeeding8 = table.Column<bool>(nullable: false),
                    BCG = table.Column<DateTime>(nullable: true),
                    HepaB1Within24hrs = table.Column<DateTime>(nullable: true),
                    HepaB1MoreThan24hrs = table.Column<DateTime>(nullable: true),
                    Pentavalent1 = table.Column<DateTime>(nullable: true),
                    Pentavalent2 = table.Column<DateTime>(nullable: true),
                    Pentavalent3 = table.Column<DateTime>(nullable: true),
                    OPV1 = table.Column<DateTime>(nullable: true),
                    OPV2 = table.Column<DateTime>(nullable: true),
                    OPV3 = table.Column<DateTime>(nullable: true),
                    IPV = table.Column<DateTime>(nullable: true),
                    MCV1 = table.Column<DateTime>(nullable: true),
                    MCV2 = table.Column<DateTime>(nullable: true),
                    DateFullyImmunizedChild = table.Column<DateTime>(nullable: true),
                    RotaVirusVaccine1 = table.Column<DateTime>(nullable: true),
                    RotaVirusVaccine2 = table.Column<DateTime>(nullable: true),
                    PCV1 = table.Column<DateTime>(nullable: true),
                    PCV2 = table.Column<DateTime>(nullable: true),
                    PCV3 = table.Column<DateTime>(nullable: true),
                    VitaminA1 = table.Column<bool>(nullable: false),
                    VitaminA2 = table.Column<bool>(nullable: false),
                    VitaminA3 = table.Column<bool>(nullable: false),
                    IronA1 = table.Column<bool>(nullable: false),
                    IronA2 = table.Column<bool>(nullable: false),
                    MNP1 = table.Column<bool>(nullable: false),
                    MNP2 = table.Column<bool>(nullable: false),
                    Deworming = table.Column<DateTime>(nullable: true),
                    Remarks = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NEPIEntry", x => x.TCL_NEPI_EntryId);
                    table.ForeignKey(
                        name: "FK_NEPIEntry_NEPI_TCL_NEPIId",
                        column: x => x.TCL_NEPIId,
                        principalTable: "NEPI",
                        principalColumn: "TCL_NEPIId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PNCEntry",
                columns: table => new
                {
                    TCL_PNC_EntryId = table.Column<string>(nullable: false),
                    TCL_PNCId = table.Column<string>(nullable: false),
                    DateOfRegistraiton = table.Column<DateTime>(nullable: true),
                    FamilySerialNumber = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    Age = table.Column<int>(nullable: false),
                    LMPDate = table.Column<DateTime>(nullable: true),
                    LMPGP = table.Column<string>(nullable: true),
                    EDC = table.Column<DateTime>(nullable: true),
                    PrenatalVisitTrimester1 = table.Column<DateTime>(nullable: true),
                    PrenatalVisitTrimester2 = table.Column<DateTime>(nullable: true),
                    PrenatalVisitTrimester3 = table.Column<DateTime>(nullable: true),
                    TetanusStatus = table.Column<string>(nullable: true),
                    DateTetanusToxiodVaccine1 = table.Column<DateTime>(nullable: true),
                    DateTetanusToxiodVaccine2 = table.Column<DateTime>(nullable: true),
                    DateTetanusToxiodVaccine3 = table.Column<DateTime>(nullable: true),
                    DateTetanusToxiodVaccine4 = table.Column<DateTime>(nullable: true),
                    DateTetanusToxiodVaccine5 = table.Column<DateTime>(nullable: true),
                    IronWithFolicDateGiven1 = table.Column<DateTime>(nullable: true),
                    IronWithFolicNumberGiven1 = table.Column<int>(nullable: false),
                    IronWithFolicDateGiven2 = table.Column<DateTime>(nullable: true),
                    IronWithFolicNumberGiven2 = table.Column<int>(nullable: false),
                    IronWithFolicDateGiven3 = table.Column<DateTime>(nullable: true),
                    IronWithFolicNumberGiven3 = table.Column<int>(nullable: false),
                    IronWithFolicDateGiven4 = table.Column<DateTime>(nullable: true),
                    IronWithFolicNumberGiven4 = table.Column<int>(nullable: false),
                    IronWithFolicDateGiven5 = table.Column<DateTime>(nullable: true),
                    IronWithFolicNumberGiven5 = table.Column<int>(nullable: false),
                    IronWithFolicDateGiven6 = table.Column<DateTime>(nullable: true),
                    IronWithFolicNumberGiven6 = table.Column<int>(nullable: false),
                    DateSTITested = table.Column<DateTime>(nullable: true),
                    DateSTIResult = table.Column<DateTime>(nullable: true),
                    DateSTIPenicillin = table.Column<DateTime>(nullable: true),
                    PregnancyDateTerminated = table.Column<DateTime>(nullable: true),
                    PregnancyOutcome = table.Column<string>(nullable: true),
                    PregnancyGender = table.Column<string>(nullable: true),
                    BirthWeight = table.Column<decimal>(nullable: false),
                    PlaceOfHealthFacility = table.Column<string>(nullable: true),
                    PlaceOfNIO = table.Column<string>(nullable: true),
                    AttendedBy = table.Column<string>(nullable: true),
                    Remarks = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PNCEntry", x => x.TCL_PNC_EntryId);
                    table.ForeignKey(
                        name: "FK_PNCEntry_PNC_TCL_PNCId",
                        column: x => x.TCL_PNCId,
                        principalTable: "PNC",
                        principalColumn: "TCL_PNCId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FP_UserId",
                table: "FP",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_FPEntry_TCL_FPId",
                table: "FPEntry",
                column: "TCL_FPId");

            migrationBuilder.CreateIndex(
                name: "IX_NEPI_UserId",
                table: "NEPI",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_NEPIEntry_TCL_NEPIId",
                table: "NEPIEntry",
                column: "TCL_NEPIId");

            migrationBuilder.CreateIndex(
                name: "IX_PNC_UserId",
                table: "PNC",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_PNCEntry_TCL_PNCId",
                table: "PNCEntry",
                column: "TCL_PNCId");

            migrationBuilder.CreateIndex(
                name: "IX_UserRole_RoleId",
                table: "UserRole",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_UserRole_UserId",
                table: "UserRole",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FPEntry");

            migrationBuilder.DropTable(
                name: "NEPIEntry");

            migrationBuilder.DropTable(
                name: "PNCEntry");

            migrationBuilder.DropTable(
                name: "UserRole");

            migrationBuilder.DropTable(
                name: "FP");

            migrationBuilder.DropTable(
                name: "NEPI");

            migrationBuilder.DropTable(
                name: "PNC");

            migrationBuilder.DropTable(
                name: "Role");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
